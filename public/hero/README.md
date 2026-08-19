# Hero carousel photography brief

The hero (`components/Hero.tsx`) is now a working carousel with 5 slides,
autoplay, arrows, and dot navigation — not a single static frame. Each slide
below needs one real photo. Drop files into `/public/hero/` using these
exact names and the component picks them up automatically:

| File                          | Category            |
|--------------------------------|---------------------|
| slide-smartphones.jpg          | Smartphones         |
| slide-laptops.jpg              | Laptops             |
| slide-cameras.jpg              | Cameras             |
| slide-drones.jpg               | Drones              |
| slide-speakers.jpg             | Bluetooth Speakers  |

Recommended: 2400×1600px minimum, landscape, compressed to under ~400KB each
(the carousel is full-bleed and needs to stay fast on mobile data).

## Direction — this should look like Kadtech, not a stock tech brand

Kadtech is a Nigerian retailer with a real store in Wuse 2, Abuja — the
photography should carry that, not read as a generic Silicon Valley device
shoot:

- **Shoot in the store, or a set styled after it.** The actual Old Banex
  Plaza shopfront, counter, or shelving in the background (even softly
  out of focus) does more for trust than a seamless studio backdrop.
- **Include people where it makes sense.** A staff member's hands
  demonstrating a phone, a customer picking up a laptop — real Nigerian
  commerce has energy and directness that an empty product-on-plinth shot
  doesn't carry. This isn't required for every slide, but at least one or
  two slides with people will do more for "trust" than five more product
  close-ups.
- **One consistent lighting setup across all five slides** so they read as
  one shoot commissioned for this site, not five images from different
  sources.
- **Avoid:** stock photography of unrelated devices, imagery lifted from
  Apple/Samsung/DJI marketing (these are used only as a design reference,
  never as an image source — see the brief), and anything staged to look
  like a different country or a different kind of shop.

Once real files exist, `components/Hero.tsx` needs no changes — just add
the images with the filenames above.
