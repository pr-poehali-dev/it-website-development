"""Парсер сайта — извлекает контент по частям"""
import json
import urllib.request
import re


def clean(text):
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def handler(event, context):
    """Парсер сайта — извлекает контент по частям через параметр part"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    params = event.get('queryStringParameters') or {}
    page = params.get('page', '')
    part = params.get('part', 'structure')

    url = 'https://uplink-it.ru'
    if page:
        url = url.rstrip('/') + '/' + page.lstrip('/')

    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    })
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode('utf-8', errors='replace')

    for tag in ['script', 'noscript']:
        html_clean = re.sub(r'<' + tag + r'[^>]*>.*?</' + tag + '>', '', html, flags=re.DOTALL | re.IGNORECASE)

    if part == 'structure':
        headings = re.findall(r'<h([1-6])[^>]*>(.*?)</h\1>', html_clean, re.DOTALL | re.IGNORECASE)
        paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', html_clean, re.DOTALL | re.IGNORECASE)
        result = {
            'headings': [{'level': h[0], 'text': clean(h[1])} for h in headings if clean(h[1])],
            'paragraphs': [clean(p) for p in paragraphs if clean(p) and len(clean(p)) > 3],
            'html_length': len(html),
        }

    elif part == 'styles':
        style_blocks = re.findall(r'<style[^>]*>(.*?)</style>', html, re.DOTALL | re.IGNORECASE)
        all_css = '\n'.join(style_blocks)
        colors = re.findall(r'(?:background-color|color|background|border-color)\s*:\s*(#[0-9a-fA-F]{3,8}|rgb[a]?\([^)]+\))', all_css, re.IGNORECASE)
        fonts = re.findall(r'font-family\s*:\s*([^;}"]+)', all_css, re.IGNORECASE)
        google_fonts = re.findall(r'fonts\.googleapis\.com/css2?\?[^"\'>\s]+', html, re.IGNORECASE)
        bg_images = re.findall(r'background(?:-image)?\s*:\s*[^;]*url\(["\']?([^"\')\s]+)["\']?\)', all_css + html, re.IGNORECASE)
        result = {
            'colors': list(set(colors))[:80],
            'fonts': list(set([f.strip().strip("'\"") for f in fonts])),
            'google_fonts': google_fonts,
            'bg_images': list(set(bg_images))[:15],
        }

    elif part == 'contacts':
        phone_numbers = re.findall(r'[\+]?[78][\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}', html)
        emails = re.findall(r'[\w\.-]+@[\w\.-]+\.\w+', html)
        tel_links = re.findall(r'<a[^>]*href="tel:([^"]*)"[^>]*>(.*?)</a>', html_clean, re.DOTALL | re.IGNORECASE)
        mail_links = re.findall(r'<a[^>]*href="mailto:([^"]*)"[^>]*>(.*?)</a>', html_clean, re.DOTALL | re.IGNORECASE)
        footer_match = re.search(r'<footer[^>]*>(.*?)</footer>', html_clean, re.DOTALL | re.IGNORECASE)
        result = {
            'phones': list(set(phone_numbers)),
            'emails': list(set(emails)),
            'tel_links': [{'tel': t[0], 'text': clean(t[1])} for t in tel_links],
            'mail_links': [{'mail': m[0], 'text': clean(m[1])} for m in mail_links],
            'footer_text': clean(footer_match.group(1))[:800] if footer_match else '',
        }

    elif part == 'navigation':
        all_links = re.findall(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', html_clean, re.DOTALL | re.IGNORECASE)
        nav_links = [{'href': l[0], 'text': clean(l[1])} for l in all_links if clean(l[1]) and len(clean(l[1])) < 100]
        logo_match = re.search(r'class="[^"]*logo[^"]*"[^>]*>(.*?)</a>', html_clean, re.DOTALL | re.IGNORECASE)
        result = {
            'all_links': nav_links[:40],
            'logo_text': clean(logo_match.group(1)) if logo_match else '',
        }

    elif part == 'divs':
        divs = re.findall(r'<div[^>]*class="([^"]*)"[^>]*(?:style="([^"]*)")?[^>]*>((?:(?!<div).)*?)</div>', html_clean, re.DOTALL | re.IGNORECASE)
        interesting = []
        for d in divs:
            txt = clean(d[2])
            if txt and 3 < len(txt) < 400:
                interesting.append({'class': d[0][:120], 'style': d[1][:200] if d[1] else '', 'text': txt})
        result = {'divs': interesting[:60]}

    elif part == 'spans':
        spans = re.findall(r'<span[^>]*(?:class="([^"]*)")?[^>]*>(.*?)</span>', html_clean, re.DOTALL | re.IGNORECASE)
        result = {
            'spans': [{'class': s[0] or '', 'text': clean(s[1])} for s in spans if clean(s[1]) and 2 < len(clean(s[1])) < 200][:60]
        }

    elif part == 'images':
        imgs = re.findall(r'<img[^>]*src="([^"]*)"[^>]*(?:alt="([^"]*)")?[^>]*/?>',html_clean, re.IGNORECASE)
        bg_imgs = re.findall(r'url\(["\']?([^"\')\s]+)["\']?\)', html, re.IGNORECASE)
        result = {
            'images': [{'src': i[0], 'alt': i[1] if len(i) > 1 else ''} for i in imgs][:30],
            'bg_images': list(set(bg_imgs))[:20],
        }

    elif part == 'raw':
        chunk = int(params.get('chunk', '0'))
        chunk_size = 4000
        start = chunk * chunk_size
        end = start + chunk_size
        result = {
            'html': html[start:end],
            'total': len(html),
            'chunk': chunk,
            'more': end < len(html),
        }

    else:
        result = {'error': 'Use part: structure, styles, contacts, navigation, divs, spans, images, raw'}

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        'body': json.dumps(result, ensure_ascii=False),
    }
