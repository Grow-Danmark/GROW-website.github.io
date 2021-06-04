<template>
    <vsm-menu
      :menu="menu"
      :base-width="380"
      :base-height="400"
      :screen-offset="10"
      element="header"
      handler="hover"
      @open-dropdown="onOpenDropdown"
      @close-dropdown="onCloseDropdown"
    >
    <template #default="{ item }">
      <!--Dropdown Content-->
      <!--You can replace it with a separate component if each menu item has its own style-->
      <!--Dynamic Component Example: https://codepen.io/Alexeykhr/pen/YzPKxpX-->
      <div class="wrap-content">
        <div class="wrap-content__block">
          {{ item.title }}
        </div>
        <div class="wrap-content__item">
          <li v-for="page in $static.pages.edges.slice().reverse()" :key="page.databaseId">
            <g-link :to="page.node.uri" class="nav__links">
              {{ page.node.title }}
            </g-link>
            </li>
        </div>
      </div>
    </template>
    <template #before-nav>
      <!--Image or svg of website logo-->
      <g-link to="/">
      <li class="vsm-section logo-section">
        <img class="header-logo"
          src="http://wp.grow.dk/wp-content/uploads/2021/06/logo.png"
          alt="GROW logo"
        >
      </li>
      </g-link>
    </template>
    <template #title="data">
      <!--Display menu items through slots-->
      {{ data.item.title }}
    </template>
    <template #after-nav>
      <!--Mobile Burger, buttons, etc-->
      <!--For the same styles - add the vsm-section-->
      <li class="vsm-section vsm-mob-hide">
        <!-- <button>My Button</button> -->
      </li>
      <!--Display when user media screen below from $vsm-media (scss)-->
      <vsm-mob>Test mobile content</vsm-mob>
    </template>
  </vsm-menu>
</template>

<static-query>
query Pages {
  pages {
		edges {
      node
      {
        title
        uri
        databaseId
      }
    }
  },
  generalSettings {
    title
  }
}
</static-query>

<script>
/* eslint-disable */
/*
 * This is an example of possible settings, you can also control
 * scss variables, and also you need to add a little style.
 * So copy and delete what you don’t need.
 *
 * After #after-nav and #before-nav it is recommended to use
 * to maintain the correct HTML structure:
 *   <li class="vsm-section">
 */

export default {
  data() {
    return {
      menu: [
        {
          // display menu item (or override title slot)
          title: 'Om GROW',
          // now this is not a link, but a menu item where there is a dropdown
          dropdown: 'Om GROW',
          // don't want a button element?
          element: 'span',
          // menu item can accept all attributes
          attributes: {
            // I want more classes! No problem
            // string, array, object, not matter
            class: ['my-class1', { 'my-class2': true }],
            // Custom attributes
            'data-big': 'yes'
          },
          // add some events?
          listeners: {
            // all possible native events
            mouseover: (evt) => {
              console.log('news hover', evt)
            }
          },
          // just extra properties in the object
          new_section: false,
        },
        {
          title: 'Få hjælp hos GROW',
          attributes: {
            href: '/fa-hjaelp-hos-grow/'
          }
        },
        {
          title: 'Om GROW',
          attributes: {
            href: '/om-grow'
          }
        },
        {
          title: 'Gør en forskel',
          attributes: {
            href: '/om-grow'
          }
        }
        // ...
      ]
    }
  },
  methods: {
    onOpenDropdown() {
      console.log('onOpenDropdown')
    },
    onCloseDropdown() {
      console.log('onCloseDropdown')
    }
  }
}
</script>

<style lang="scss">
// Styles, to quickly start using the component
// You can delete, change or add your own

nav {
  display: flex;
  justify-content: center;
}
// Limit the width to 1024px and center
.vsm-menu {
  width: 100%;
  margin: 10px;
  ul {
    // max-width: 1024px;
    // margin: 0 auto;
  }
}
.vsm-link {
  color: #028785;
}
// Let's simplify the work with menu items (logo, menu, buttons, etc)
.vsm-root {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    width: 100%;
  }
}


// Move all the content to the right and reduce the logo
.logo-section {
  flex: 1 1 auto;
  img {
    user-select: none;
    max-width: 8em;
  }
}

// All menu items (element props: a, button, span, etc) are
// made the same in style
.vsm-section_menu {
  > * {
    padding: 0 25px;
    font-weight: 500;
    font-family: inherit;
  }
}

// Styles for Dropdown Content:
.wrap-content {
  padding: 30px;
  // Set the width manually so that it does not depend
  // on changing content
  width: 400px;
}
.wrap-content__block {
  font-weight: bold;
}
.wrap-content__item {
  // font-style: italic;
  font-size: .8rem;
}
</style>
