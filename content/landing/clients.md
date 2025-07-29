---
title: "About"
type: "landing"
page: "section"
weight: 6
---

<div id="clients" class="col-lg-8 full-height-screen">
    <h3>CLIENTS</h3>
    <br>
    <div class="glider-contain">
        <div class="glider">
            <div>
                <img style="margin: auto;height: 50%;" src="/logos/2K.svg">
            </div>
            <div>
                <img style="margin: auto;height: 50%;" src="/logos/Hangar13.svg">
            </div>
        </div>
        <!--button aria-label="Previous" class="glider-prev">«</button>
        <button aria-label="Next" class="glider-next">»</button>
        <div role="tablist" class="dots"></div-->
    </div>
    <script>
        window.addEventListener('load', function(){
            new Glider(document.querySelector('.glider'), {
                slidesToShow: 2,
                dots: '.dots',
                draggable: true,
                rewind: true,
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                }
            })
        })
    </script>
</div>