This project is based on the [Ionic](http://ionicframework.com/docs/) projects, using the sidemenu template. The only different is, this project has been modified to use Lazy Loading as default. All the pages now is being implemented to use Lazy Loading feature.

Also, we didnt have to import the pages anymore. We just need to define name of the page.


## Getting Started
To setting up the app, first try to clone or download this project. After that, serving the app using ionic command will automatically download all the dependencies.

*assuming your machine already installed with ionic first. If not, open their [documentation](http://ionicframework.com/docs/) to get start*
```bash
$ ionic serve
```

## Setting Up A New Page

### Creating Page
The needed component for lazy loading is the module file, {page}.module.ts . When generating the page using Ionic CLI, the module file will automatically generated for us. 

*in here we will create the 'about' page*
```bash
$ ionic g page about
```

### Putting The Page On The Sidemenu List
To add the new pages that we created into the sidemenu list, we just need to open the menu pages folder, and look on the menu.ts file. Then find this line, 

*ionic-angular-sidemenu-lazyloading/src/pages/menu/menu.ts*
```typescript
  pages = [
	  { title: 'Home', component: 'HomePage' },
	  { title: 'List', component: 'ListPage' }
  ];
```

Inside there, we just need to define the page name on the array, like so

*ionic-angular-sidemenu-lazyloading/src/pages/menu/menu.ts*
```typescript
  pages = [
	  { title: 'Home', component: 'HomePage'   },
	  { title: 'List', component: 'ListPage'   },
	  { title: 'About', component: 'AboutPage' }
  ];
```


The good thing about lazyloading is, we didnt have to import the page anymore on so many places. So, it kind a make the code more clean. Before this, we have to import it on app.module.ts and any other pages that need the page (usually for navigation).


## Adding The Menu Toggle Button On The New Page
Right now, the app should be able to open the new page easily. However, when we navigate into the new page, the sidemenu cant be access, due to missing menu button. To fix this, we just need to open the new page html file, then add the button below.

*the button for trigger the sidemenu*
```html
   <button ion-button icon-only start menuToggle><ion-icon name="menu"></ion-icon></button>
```

Copy the above button, open the new html page we created, find the ion-navbar element

*ionic-angular-sidemenu-lazyloading/src/pages/about/about.html*
```html
  <ion-navbar>
    <ion-title>about</ion-title>
  </ion-navbar>
```


Then add the button inside it.

*ionic-angular-sidemenu-lazyloading/src/pages/about/about.html*
```html
  <ion-navbar>
  	<button ion-button icon-only start menuToggle><ion-icon name="menu"></ion-icon></button>
      <ion-title>about</ion-title>
  </ion-navbar>
```
