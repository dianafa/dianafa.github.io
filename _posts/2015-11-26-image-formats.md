---
layout: post
title:  "Image format comparison"
date:   2015-11-26 21:04:12
categories: image format jpeg bpg webp png gif comparison
image: jpeg_bpg.jpg
estimated_reading_time: 15
---
I’m a student. When on one of the classes everyone was asked to invent and make some measurements of anything we want and then to prepare a short essay about it’s results, I was thinking about something what really interests me, not the standard “Sort algorithms comparison” or “Page load time”. Booring.

In October I’ve been to [O'Reilly Velocity](http://conferences.oreilly.com/velocity/devops-web-performance-eu-2015) conference in Amsterdam. Lot of interesting stuff- all connected to performance and speeding Internet up. One of the most interesting speeches was the [Guy Podjarny](https://twitter.com/guypod)’s one about optimizing image sizes on the webpages. It was really great and I strongly encourage you to listen some of his speeches when you’ll have an opportunity.

So, what have I done? I’ve decided to test image formats and its sizes by myself. I’ve created a couple of images in different resolutions (8 resolutions, between 100x100px and 5000x5000px) and different complexity;


example of simple images:

![simple1]
![simple2]
![simple3]

example of complex ones:

![complex1]
![complex2]
![complex3]

and I tested how they sizes (in Bytes) are changing when using a different image formats. I’ve measured the GIF, PNG, JPEG (in 100% and 80% of compression quality) WebP and BPG file formats.

## The results

If we consider an average file resolution for each of types, the results look like this:

![alt text][chart_average]

so assuming that an 80% quality JPEG is the type of format most of us is using, let’s take a look at this data from this point of view:

![alt text][chart_JPEG]

The same JPEG file saved in PNG format can have about 8% bigger size, and saving it in WebP can save us up to 20%!

Generally, the data I’ve collected looks like this:

![alt text][chart_all]

As you can see, image type has huge impact on the file size. For example, given image with resolution 3000x3000px can have 1778KB in JPEG format with 100% of compression quality. We can save from 1400KB to 1700KB by choosing accordingly WebP or BPG format.

### Image size

As I had so many data I decided to divide image resolutions to a two ranges: below and above 1000x1000px. The reasoning was simple- when we are using a simple images on our pages - they are usually below 1000x1000px. The biger ones are used for different purposes- as a backgrounds, wallpapers etc.You know of which in majority consist your page, so you can draw your conclusion basing on more accurate measurements.

![alt text][chart_small_big]

In resolutions below 1000x1000px the format change is usually a nice-to-have. When dealing with bigger pics - it’s a necessity.

### Image content

Then I started to think in other way- often you are able to adjust your file image resolutions to user’s device, but content of images usually stays the same on all of them. How the wykresy look like if we take a look on the image content, that is, image complexity.
Results are stunning!

![alt text][chart_complexity]

Complex images are on average 20 times bigger. For JPEG (quality: 80%) type it’s “only” the 5.2x difference, whereas for GIF it can be even 60 times more! That’s why, for smaller images you should choose GIF’s and for photos and layouts whose sizes may vary you’ll be probably likely to choose the JPEGs. 

What does that mean? Wherever there is a chance to simplify your graphics - do it. For example is better to choose material design than old-fashioned motley pics.

### BPG and WebP

As you can see from the graphs above, the most optimal file format for every type and resolution of image is the BPG format. What it actually is?

__BPG__ (Better Portable Graphics) is a new lossy and lossless image compression format created in 2014 to replace to JPEG file format. It's based on the intra-frame encoding of the [High Efficiency Video Coding](https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding) (HEVC) video compression standard. It also supports animation. Unfortunately, if you want to use it on your site, you need to use a special JavaScript decoder, as this format is currently not supported by any browser. For more info see [BPG Home Site](http://bellard.org/bpg/).

Another interesting file type is the __WebP__. Developed by Google 5 years ago is currently supported by Chrome and Opera browsers. The same as BPG supports both lossy and lossless image compression with and without transparency (alpha channel). More about WebP and a lot of interesting info about compression alghorithms can be found on [it’s official site](https://developers.google.com/speed/webp/).

## Summary

As you can see, an image format can have a huge impact on size of files on your page. Differences start to be visible even on small 100x100px images, but become huge when comes to images in resolutions over 1000x1000px. Then choosing WebP or BPG instead of PNG’s and JPEG’s should be first step in the load-time optimization. A really huge source of savings can be their complexity. I would never expect, that the image content can have so significant impact on it’s size, regardless of it’s type (for some types bigger, for some types smallet though).

Each KB of your page drags down your visitors experience which can cost you far more than time you would spend of file type optimization in your website.

<small>
_Main image: JPEG image on the left, BPG image on the right. Source: <http://www.webdesignerdepot.com>._
<small>

[simple1]: /images/image-formats/simple1.png "Simple image"
[simple2]: /images/image-formats/simple2.jpg "Simple image"
[simple3]: /images/image-formats/simple3.jpg "Simple image"
[complex1]: /images/image-formats/complex1.jpg "Complex image"
[complex2]: /images/image-formats/complex2.jpg "Complex image"
[complex3]: /images/image-formats/complex3.jpg "Complex image"
[chart_all]: /images/image-formats/chart_all.png "Overall results"
[chart_average]: /images/image-formats/chart_average.png "Average image size"
[chart_JPEG]: /images/image-formats/chart_JPEG.png "Average image size in comparison to JPEG"
[chart_small_big]: /images/image-formats/chart_small_big.png "Big and small images"
[chart_complexity]: /images/image-formats/chart_complexity.png "Simple and complex images"

