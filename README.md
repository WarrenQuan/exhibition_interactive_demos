# Interactive Demos for Exhibition
Through prototyping, I investigated different ways for visitors to access information about artworks in the Brooklyn Artists Exhibition, both two-dimensional and three-dimensional. Through this, I looked into libraries and software such as Micr.io, third-party platforms, and from scratch with ThreeJS. Demos were created using a section of the Ancient Egypt exhibit, with panoramas and 360 captures to demonstrate technological capabilities.

## (2D) Micr.io
[Micr.io](https://micr.io/products) allows high image upload and tours through interactive images and markers. This is currently being used by [MoMa through their installation iamges](https://www.moma.org/calendar/exhibitions/5175) to provide more immersive experiences within their installations. 

### Demo Example
[https://exhibition-interactive-micrio.vercel.app](https://exhibition-interactive-micrio.vercel.app/)


## (3D) Third Party 360 Tour Platforms 
There are compilations of different 360 tour platforms online. Many are for real estate tours, such as [Matterport](https://matterport.com/), [Immoviewer](https://www.immoviewer.com/), [PivoTour](https://pivo.ai/products/app-pivo-tour), etc. A list of platforms can be viewed on compilations of resources such as links like these:
- [https://github.com/gadlol/360-Virtual-Tour-Creator-Softwares?tab=readme-ov-file](https://github.com/gadlol/360-Virtual-Tour-Creator-Softwares?tab=readme-ov-file)
- [https://www.capterra.com/virtual-tour-software/?pricing_options=FREE_VERSION](https://www.capterra.com/virtual-tour-software/?pricing_options=FREE_VERSION)
- [https://www.g2.com/categories/virtual-tour](https://www.g2.com/categories/virtual-tour)

For 360 capture, the iPhone application [Teleport: 360° Camera](https://apps.apple.com/us/app/teleport-360-camera/id6476905405) was used. For official purposes, a 360 camera would be preferable for higher quality scans. With the demo, we used Theasys, a free 360 viewing platform that has mobile friendly features.

### Demo Example
[https://exhibition-interactive-demos-theasys.vercel.app/](https://exhibition-interactive-demos-theasys.vercel.app/)

## (3D) ThreeJS (From Scratch)
[ThreeJS](https://threejs.org/) is a JavaScript library for animated 3D computer graphics in a web browser using WebGL. Because all of the three-dimensional environments and controls are all coded by the programmer and not dependent on outsourcing third-party 360 viewing platforms, it allows for an infinite amount of customization options with what we can do and add at the cost of maintability. Due to the quick turnaround required for this project, this route is not recommended. However, the base code here to view a 360 capture is provided for future consideration usage.

### Demo Example
[https://exhibition-interactive-threejs.vercel.app/](https://exhibition-interactive-threejs.vercel.app/)
