<script lang="ts">
    import heroSectionImg from "$lib/assets/hero-section.png";
</script>

<section class="block relative overflow-hidden h-dvh">
    <!--<div class="z-0 w-full h-full">
        <img src={heroSectionImg} alt="Backgroud Depiction of a Gorgeous, Futuristic, and Advanced AI World" class="" />
    </div>-->
      <!-- flow layer -->
  <div
    aria-hidden="true"
    class="pointer-events-none absolute -inset-[30%] z-0 opacity-90 blur-[70px]"
    style="
      background:
        radial-gradient(40% 35% at 25% 30%, rgba(255,150,90,.55) 0%, rgba(255,150,90,0) 70%),
        radial-gradient(45% 40% at 65% 35%, rgba(255,120,70,.35) 0%, rgba(255,120,70,0) 75%),
        radial-gradient(55% 50% at 45% 70%, rgba(255,180,130,.45) 0%, rgba(255,180,130,0) 70%);
    "
  ></div>

  <!-- optional grain -->
  <div
    aria-hidden="true"
    class="pointer-events-none absolute inset-0 z-0 opacity-[0.05] mix-blend-multiply"
    style="
      background-image: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22180%22 height=%22180%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22180%22 height=%22180%22 filter=%22url(%23n)%22 opacity=%22.35%22/%3E%3C/svg%3E');
    "
  ></div>

    <!-- Content layer -->
    <div id="hero" class="relative flex items-center justify-center">
        <div class="flex flex-col items-center justify-center mt-18 max-w-6xl text-center">
          <div id="label" class="border-2 border-solid border-black rounded-full px-3 py-1 text-[12px] ">
            A Community for All
          </div>
          <div id="headline" class="mt-4" >
            <h1 class="text-4xl font-['Inter'] font-bold text-center">
              Discover Yourself in the World of AI with J.E.B!
            </h1>
          </div>
          <div id="hero-vid">

          </div>
          <div id="buttons flex gap-2">
            <div id="yt-channel">

            </div>
            <div id="">

            </div>
          </div>
        </div>
    </div>
</section>

<div>
    <!-- Decorative part that transitions from Hero to the Features Section -->
    <div id="intro-to-features" class="margin-auto ">
        <div class="flex items-center justify-center">

        </div>
    </div>

    <!-- Goes Into The Features in More Detail -->
    <div id="Stories">

    </div>
    <div id="Quizzes">

    </div>
    <div id="Storefront">

    </div>
    <div id="Technology">

    </div>

    <div id="Gaming">

    </div>

    <div id="blog-newsletter">

    </div>

    <!-- Link to Patreon and Buy Me a Coffee -->
    <div id="Support-Us">

    </div>

    <!-- Sort of like on wave: You didn't start a business to be a bookkeeper. Design with powerful one liner.-->
    <div id="closing-card">

    </div>

    <!-- Contact Form, links with backend -->
    <div id="Contact Us">

    </div>

</div>