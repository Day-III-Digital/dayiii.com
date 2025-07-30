---
title: "Header"
type: "landing"
page: "section"
weight: 1
---


<div class="col-lg-8 full-height-screen" style="align-content: inherit;">
    <canvas id="canvas" width="1920" height="1080" style="width:60%; margin: 5% 20% 0 20%;">
    </canvas>
    <div id="heading-tagline" class="heading-tagline">TECHNICAL ART EXPERTS</div>
    <script type="module">
        import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";
        document.getElementById("canvas")
        var lottie = new DotLottie({
            autoplay: true,
            loop: false,
            useFrameInterpolation: true,
            canvas: document.getElementById("canvas"),
            src: "/images/dayiii_logo_anim_intro.json", // or .json file
        });
        lottie.addEventListener('complete', () => {
            document.getElementById("heading-tagline").style.visibility = "visible";
            lottie.destroy();
            new DotLottie({
                autoplay: true,
                loop: true,
                speed: 0.9,
                canvas: document.getElementById("canvas"),
                src: "/images/dayiii_logo_anim_endloop.json", // or .json file
            });
        })
    </script>
</div>