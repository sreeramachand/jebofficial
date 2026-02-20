<script lang="ts">
  import { NavigationMenu } from "bits-ui";
  import { Collapsible } from "bits-ui";
  import CaretDownIcon from "phosphor-svelte/lib/CaretDownIcon";
  import cn from "clsx";
  import jebLogo from "$lib/assets/jeb-logo.png";
  import Button from "./ui/Button.svelte";
  import { CaretCircleUpDownIcon } from "phosphor-svelte";

  /*
   * const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/components/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response."
    },
    {
      title: "Link Preview",
      href: "/docs/components/link-preview",
      description:
        "For sighted users to preview content available behind a link."
    },
    {
      title: "Progress",
      href: "/docs/components/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    },
    {
      title: "Scroll Area",
      href: "/docs/components/scroll-area",
      description: "Visually or semantically separates content."
    },
    {
      title: "Tabs",
      href: "/docs/components/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time."
    },
    {
      title: "Tooltip",
      href: "/docs/components/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
    }
  ];
   */
 
  type ListItemProps = {
    className?: string;
    title: string;
    href: string;
    content: string;
  };

  /* Mobile Nav */
  let isOpen = $state(false);

  function openSidebar() {
    isOpen = true;
  }

  function closeSidebar() {
    isOpen = false;
  }

  function toggleSidebar() {
    isOpen = !isOpen;
  }
</script>
 
{#snippet ListItem({ className, title, content, href }: ListItemProps)}
  <li>
    <NavigationMenu.Link
      class={cn(
        "hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground font-['Inter'] outline-hidden block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors",
        className
      )}
      {href}
    >
      <div class="text-sm font-medium leading-none">{title}</div>
      <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
        {content}
      </p>
    </NavigationMenu.Link>
  </li>
{/snippet}
 

<NavigationMenu.Root class="z-20 inline-flex w-full items-center bg-blue-200/70 backdrop-blur-sm sticky top-0">
    <div class="float-left ml-4 relative">
      <a href="/" class="inline-flex items-center gap-2">
        <img src={jebLogo} alt="joy eternal bliss logo" class="size-20">
        <h1 class="text-xl font-medium font-['Lobster_Two']">joyeternalbliss</h1>
      </a>
    </div>
    <!-- when you add left-[] margins don't work!-->
   <div id="nav-content" class="relative -right-[25vw] hidden lg:flex">
  <NavigationMenu.List
    class="group flex list-none items-center justify-center p-1 gap-[3.9rem]"
  >
    <NavigationMenu.Item value="getting-started">
      <NavigationMenu.Trigger
        class="inline-flex justify-center items-center focus-visible:bg-zinc-50 group rounded-[7px] bg-inherit h-8 w-max px-[1.15rem] py-4 text-sm font-medium transition-colors hover:bg-blue-50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-blue-50 gap-1 font-['Inter']"
      >
        Getting Started
        <CaretDownIcon
          class="relative top-[1px] ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content 
        class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left h-full w-full sm:w-auto font-['Inter'] bg-zinc-50"
      >
        <ul
          class="m-0 grid list-none -py-2 gap-x-2.5 p-2 sm:h-[250px] sm:w-[525px] sm:grid-flow-col sm:grid-rows-3 sm:p-[14px]"
        >
          <li class="row-span-3 mb-2 sm:mb-0">
            <NavigationMenu.Link
              href="/"
              class="from-muted/50 to-muted bg-linear-to-b outline-hidden flex h-full w-full select-none flex-col justify-end rounded-md no-underline focus:shadow-md"
            >
              <!-- <Icons.logo class="h-6 w-6" /> -->
               <img src={jebLogo} alt="Joy Eternal Bliss Logo" class="size-40">
              <div class="text-lg font-medium font-['Inter']">Joy Eternal Bliss</div>
              <p class="text-muted-foreground font-['Inter'] text-sm leading-tight">
                Learning. Creating. Discovery.
              </p>
            </NavigationMenu.Link>
          </li>
 
          {@render ListItem({
            href: "/storycentral",
            title: "StoryCentral",
            content: "Explore Quizzes, Philosophy, and Short Stories!"
          })}
          {@render ListItem({
            href: "/storefront",
            title: "J.E.B. Storefront",
            content: "Browse and purchase Joy Eternal Bliss products!"
          })}
          {@render ListItem({
            href: "/appcenter",
            title: "Technology & Gaming",
            content: "Learn Technology Hands-On and Play Games!"
          })}
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Trigger
        class="inline-flex justify-center font-['Inter'] items-center focus-visible:bg-zinc-50 group rounded-[7px] bg-inherit h-8 w-max px-[1.15rem] py-4 text-sm font-medium transition-colors hover:bg-blue-50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-blue-50 gap-1"
      >
        Categories
        <CaretDownIcon
          class="relative top-[1px] ml-1 size-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
          aria-hidden="true"
        />
      </NavigationMenu.Trigger>
      <NavigationMenu.Content 
        class="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left absolute font-['Inter'] left-0 top-0 w-full bg-zinc-50 sm:w-auto"
      >
        <ul
          class="grid gap-3 p-3 sm:w-[400px] sm:p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
        >
            {@render ListItem({
              href: "/storycentral/quizzes",
              title: "Quizzes",
              content: "Explore your philosophical side with fun quizzes and games!"
            })}
            {@render ListItem({
              href: "/storycentral/stories",
              title: "Stories",
              content: "Dive into captivating short stories that spark imagination!"
            })}
            {@render ListItem({
              href: "/storefront",
              title: "Shopping",
              content: "Browse and purchase Joy Eternal Bliss merch and products!"
            })}
            {@render ListItem({
              href: "/appcenter/technology",
              title: "Technology",
              content: "Learn about the latest in technology to build your future!"
            })}
            {@render ListItem({
              href: "/appcenter/gaming",
              title: "Gaming",
              content: "Play and explore the latest in modern gaming and development!"
            })}
            {@render ListItem({
              href: "/contact",
              title: "Contact Us",
              content: "Get in touch with Joy Eternal Bliss For Business Inquiries!"
            })}
          
        </ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
    <NavigationMenu.Item>
      <NavigationMenu.Link
        class="inline-flex font-['Inter'] justify-center items-center focus-visible:bg-zinc-50 group rounded-[7px] bg-inherit h-8 w-max px-[1.15rem] py-4 text-sm font-medium transition-colors hover:bg-blue-50 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-blue-50 gap-1"
        href="/blog"
      >
        <span class="hidden font-['Inter'] sm:inline">Newsletter & Blog</span>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
    <NavigationMenu.Indicator
      class="data-[state=hidden]:animate-fade-out data-[state=visible]:animate-fade-in top-full z-10 flex h-2.5 items-end justify-center overflow-hidden opacity-100 transition-[all,transform_250ms_ease] duration-200 data-[state=hidden]:opacity-0"
    >
      <div
        class="bg-border relative top-[70%] size-2.5 rotate-[45deg] rounded-tl-[2px]"
      ></div>
    </NavigationMenu.Indicator>
  </NavigationMenu.List>
  <div
    class="perspective-[2000px] absolute left-0 top-full flex w-full justify-center"
  >
    <NavigationMenu.Viewport 
      class="text-popover-foreground bg-background data-[state=closed]:animate-scale-out data-[state=open]:animate-scale-in relative mt-2.5 h-[var(--bits-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border shadow-lg transition-[width,_height] duration-200 sm:w-[var(--bits-navigation-menu-viewport-width)] "
    />
  </div>
  </div>
<!-- Mobile Navigation Button -->
<div class="absolute right-8 z-30 lg:hidden">
  <button
    type="button"
    onclick={toggleSidebar}
    class="p-4 rounded-xl transition duration-200
           hover:bg-gray-100 hover:shadow-md
           focus:outline-none focus:ring-4 focus:ring-gray-200"
    aria-expanded={isOpen}
  >
    <img
      src="/list.svg"
      alt="Open navigation menu"
      class="size-6"
    />
  </button>


<!-- Sidebar -->
 <!-- Don't use overflow: hidden; that prevents scrolling. -->
<div class="fixed top-0 right-0 z-50 h-dvh w-64
         transition-transform duration-300 ease-in-out
         {isOpen ? 'translate-x-0' : 'translate-x-full'}">
<aside
  class="z-50 h-full w-full bg-blue-50 overflow-auto"
  aria-label="Mobile sidebar"
>
  <div class="p-6 block">
    <button
    title="Close navigation menu"
    type="button"
    onclick={toggleSidebar}
    aria-expanded={!isOpen}
    class="rounded-xl transition duration-200
       hover:shadow-[0_0_15px_rgba(156,163,175,0.6)]
       focus:outline-none focus:ring-4 focus:ring-gray-300 hover:shadow-lg hover:-translate-px relative -right-40 -top-4 p-1 focus:outline-none"
    >
      <img src="/arrow-circle-right.svg" alt="Close navigation menu icon" class="size-10 relative">
    </button>
    <h2 class="text-lg -mt-2 font-semibold mb-8">Navigation</h2>
    <ul class="space-y-3">
      <li><Collapsible.Root class=" space-y-3">
  <div class="flex items-center justify-between space-x-10">
    <h4 class="text-[15px]">Getting Started</h4>
    <Collapsible.Trigger
      class="rounded-9px bg-background-alt text-foreground shadow-btn hover:bg-muted inline-flex h-10 w-10 items-center justify-center transition-all active:scale-[0.98]"
      aria-label="Show starred repositories"
    >
      <CaretCircleUpDownIcon class="size-6 rounded-xl" />
    </Collapsible.Trigger>
  </div>
 
  <Collapsible.Content
    hiddenUntilFound
    class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 overflow-hidden font-mono text-[15px] tracking-[0.01em]"
  >
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/storycentral">StoryCentral</a>
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/storefront">J.E.B. Storefront</a>
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/appcenter">Technology & Gaming</a>
    </div>
  </Collapsible.Content>
</Collapsible.Root></li>
      <li><Collapsible.Root class=" space-y-3">
  <div class="flex items-center justify-between space-x-10">
    <h4 class="text-[15px]">Categories</h4>
    <Collapsible.Trigger
      class="rounded-9px bg-background-alt text-foreground shadow-btn hover:bg-muted inline-flex h-10 w-10 items-center justify-center transition-all active:scale-[0.98]"
      aria-label="Show starred repositories"
    >
      <CaretCircleUpDownIcon class="size-6" />
    </Collapsible.Trigger>
  </div>
 
  <Collapsible.Content
    hiddenUntilFound
    class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 overflow-hidden font-mono text-[15px] tracking-[0.01em]"
  >
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/storycentral/quizzes">Quizzes</a>
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/storycentral/stories">Stories</a>
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/storefront">Storefront</a>
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/appcenter/technology">Technology</a>
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/appcenter/gaming">Gaming</a>
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      <a href="/contact">Contact Us</a>
    </div>
  </Collapsible.Content>
</Collapsible.Root></li>
      <li><a href="/blog"><h4 class="text-[15px]">Blog & Newsletter</h4></a></li>
    </ul>
  </div>
</aside>
</div>
</div>
</NavigationMenu.Root>
