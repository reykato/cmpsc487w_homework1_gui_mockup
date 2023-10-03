import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'MainTenant Portal',
  description: 'State-of-the-art maintenance request portal.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'New Request', link: '/newrequest' },
      { text: 'View Requests', link: '/viewrequests' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    // sidebar: [
    //   {
    //     // text: 'Guide',
    //     items: [
    //       { text: 'Example', link: '/example' },
    //       // ...
    //     ],
    //   },
    // ],
  },
});
