from PIL import Image
import os

def generate_favicon(source_path, output_dir):
    img = Image.open(source_path)
    # Generate favicon.ico (multiple sizes)
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
    img.save(os.path.join(output_dir, 'favicon.ico'), sizes=icon_sizes)
    
    # Generate apple-touch-icon.png
    apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save(os.path.join(output_dir, 'apple-touch-icon.png'))
    
    # Generate android-chrome-192x192.png and 512x512.png
    for size in [192, 512]:
        chrome_icon = img.resize((size, size), Image.Resampling.LANCZOS)
        chrome_icon.save(os.path.join(output_dir, f'android-chrome-{size}x{size}.png'))
    
    print(f"Favicons generated successfully in {output_dir}")

if __name__ == "__main__":
    logo_path = "/home/ubuntu/codesprouts/public/logo.png"
    public_dir = "/home/ubuntu/codesprouts/public"
    generate_favicon(logo_path, public_dir)
