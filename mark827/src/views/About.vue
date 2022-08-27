<template>
  <header>
    <div class="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-gray-200">
      <p class="py-2">
        power by
        <a
          href="https://github.com/FFmpeg/FFmpeg"
          target="_blank"
          rel="noopener"
          class="text-indigo-300 hover:text-indigo-200 transition duration-150"
          >FFmpeg</a
        >
      </p>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      licenses: [
        { title: "Free hosting: Netlify", url: "https://netlify.com" },
        { title: "Free domain name: JS.org", url: "https://js.org" },
        {
          title: "ffmpeg.wasm - MIT",
          url: "https://github.com/ffmpegwasm/ffmpeg.wasm",
        },
        {
          title: "mediainfo.js - BSD 2-Clause",
          url: "https://github.com/buzz/mediainfo.js",
        },
      ],
    };
  },
};
</script>
