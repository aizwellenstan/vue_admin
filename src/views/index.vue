<template functional>
  <div id="app">
    <div class="hero-section">
      <div class="hero-slider owl-carousel">
        <carousel
          :loop="true"
          :navigation-enabled="false"
          :dots="true"
          :mouse-drag="false"
          :animate-out="fadeOut"
          :animate-in="fadeIn"
          :items="1"
          :autoplay="true"
          :per-page="1"
          :speed="2000"
          :autoplay-timeout="6000"
        >
          <slide>
            <div class="hs-item set-bg" style="background-image: url('../assets/img/slider-1.jpg')">
              <div class="hs-text">
                <div class="container">
                  <h2>The More Sensors,<br>The Less Efficient Paradox</h2><!--<span>Games</span>-->
                  <p>How to manage all subsystem in an easy way?<br>
                    How to remember the location of a sensor?<br>
                    How to identify problems when there are massive amount of data?</p>
                  <a href="#" class="site-btn">Read More</a>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="hs-item set-bg" style="background-image: url('../assets/img/slider-2.jpg')">
              <div class="hs-text">
                <div class="container">
                  <h2>The more sensors,<br>the less efficient paradox</h2><!--<span>Games</span>-->
                  <p>How to manage all subsystem in an easy way?<br>
                    How to remember the location of a sensor?<br>
                    How to identify problems when there are massive amount of data?</p>
                  <a href="#" class="site-btn">Read More</a>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <div class="latest-news-section">
      <div class="ln-title">Latest News</div>
      <div class="news-ticker">
        <div class="news-ticker-contant">
          <marquee-text
            :duration="15"
            :repeat="3"
            :paused="isPaused"
          >
            <div class="nt-item"><span class="ti-notic">NEW</span>Everything in ONE PLATFORM </div>
            <div class="nt-item"><span class="new">NEW</span>Benefit of Augmented Reality (AR) for manufacturing industry </div>
            <div class="nt-item"><span class="racing">NEW</span>Supports KPI optimization</div>
          </marquee-text>

        </div>
      </div>
    </div>

    <section class="feature-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 p-0">
            <div class="feature-item set-bg" style="background-image: url('../assets/img/features/1.jpg')">
              <span class="cata yellow">simply</span>
              <div class="fi-content text-white">
                <h5><a href="#">Everything in ONE PLATFORM</a></h5>
                <p>The benefits of an all-in-one personalisation platform.</p>
                <a href="#" class="fi-comment">&nbsp;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 p-0">
            <div class="feature-item set-bg" style="background-image: url('../assets/img/features/2.jpg')">
              <span class="cata pink">best</span>
              <div class="fi-content text-white">
                <h5><a href="#">3D Visualization </a></h5>
                <p>If you need visual content in any capacity, 3D visualization may be the perfect solution. </p>
                <a href="#" class="fi-comment">&nbsp;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 p-0">
            <div class="feature-item set-bg" style="background-image: url('../assets/img/features/3.jpg')">
              <span class="cata purple">awesome</span>
              <div class="fi-content text-white">
                <h5><a href="#">3D Visualization  of Data </a></h5>
                <p>Turn Big Data Into Business Insights With 3D Visualization Tools for Business Intelligence.</p>
                <a href="#" class="fi-comment">&nbsp;</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 p-0">
            <div class="feature-item set-bg" style="background-image: url('../assets/img/features/4.jpg')">
              <span class="cata green">easy</span>
              <div class="fi-content text-white">
                <h5><a href="#">Management Platform with Visualization  </a></h5>
                <p>Compare product reviews  and features to build your list.</p>
                <a href="#" class="fi-comment">&nbsp;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="basicmodule" class="review-section spad set-bg">
      <div class="container">
        <div class="section-title">
          <!--<div class="cata new">new</div>-->
          <h2>Basic Module</h2>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <a href="#">
              <div class="review-item">
                <div class="review-cover set-bg" style="background-image: url('../assets/img/review/img_2-1.png')">
                  <div class="score yellow"><img src="../../src/assets/img/icons/icon_stars.png" alt=""></div>
                </div>
                <div class="review-text">
                  <h5>Time Bar</h5>

                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="#">
              <div class="review-item">
                <div class="review-cover set-bg" style="background-image: url('../assets/img/review/img_2-2.png')">
                  <div class="score yellow"><img src="../../src/assets/img/icons/icon_stars.png" alt=""></div>
                </div>
                <div class="review-text">
                  <h5>Report</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="#">
              <div class="review-item">
                <div class="review-cover set-bg" style="background-image: url('../assets/img/review/img_2-3.png')">
                  <div class="score yellow"><img src="../../src/assets/img/icons/icon_stars.png" alt=""></div>
                </div>
                <div class="review-text">
                  <h5>Alarm</h5>

                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="#">
              <div class="review-item">
                <div class="review-cover set-bg" style="background-image: url('../assets/img/review/img_2-4.png')">
                  <div class="score yellow"><img src="../../src/assets/img/icons/icon_stars.png" alt=""></div>
                </div>
                <div class="review-text">
                  <h5>Editor Mode</h5>

                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="padding-top30">&nbsp; </div>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <a href="#">
              <div class="review-item">
                <div class="review-cover set-bg" style="background-image: url('../assets/img/review/img_2-5.png')">
                  <div class="score yellow"><img src="../../src/assets/img/icons/icon_stars.png" alt=""></div>
                </div>
                <div class="review-text ">
                  <h5>User Management</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="#">
              <div class="review-item">
                <div class="review-cover set-bg" style="background-image: url('../assets/img/review/img_2-6.png')">
                  <div class="score yellow"><img src="../../src/assets/img/icons/icon_stars.png" alt=""></div>
                </div>
                <div>
                  <div class="review-text">
                    <h5>2D Information bar</h5>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6">
            <a href="#">
              <div class="review-item">
                <div class="review-cover set-bg" style="background-image: url('../assets/img/review/img_2-7.png')">
                  <div class="score yellow"><img src="../../src/assets/img/icons/icon_stars.png" alt=""></div>
                </div>
                <div class="review-text">
                  <h5>3D Information</h5>

                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-3 col-md-6">
            <a href="#">
              <div class="review-item">
                <div class="review-cover set-bg" style="background-image: url('../assets/img/review/img_2-8.png')">
                  <div class="score yellow"><img src="../../src/assets/img/icons/icon_stars.png"></div>
                </div>
                <div class="review-text">
                  <h5>Monitor Mode</h5>

                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="subsystem" class="tournaments-section spad">
      <div class="container">
        <div class="section-title">
          <!--<div class="cata new"></div>-->
          <h2>Subsystem</h2>
        </div>

        <!--<div class="tournament-title">Tournaments</div>-->
        <div class="row">
          <div class="col-md-6">
            <div class="tournament-item mb-4 mb-lg-0">
              <div class="cata orange">new</div>
              <a href="#">
                <div class="ti-content">
                  <div class="ti-thumb set-bg" style="background-image: url('../assets/img/tournament/1.png')" />
                  <div class="ti-text">
                    <h4>AR Glasses</h4>
                    <ul>
                      <li>Remote online inspections</li>
                      <li>Increased service quality</li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="tournament-item">
              <div class="cata pink">new</div>
              <a href="#">
                <div class="ti-content">
                  <div class="ti-thumb set-bg" style="background-image: url('../assets/img/tournament/2.png')" />
                  <div class="ti-text">
                    <h4>Digital Twin Operational Management</h4>
                    <ul>
                      <li>Display data in real-time</li>
                      <li>Simultaneous simulation</li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="padding20" />

        <div class="row">
          <div class="col-md-6">
            <div class="tournament-item mb-4 mb-lg-0">
              <div class="cata purple">new</div>
              <a href="#">
                <div class="ti-content">
                  <div class="ti-thumb set-bg" style="background-image: url('../assets/img/tournament/3.png')" />
                  <div class="ti-text">
                    <h4>LBS for Positioning and People Tracking</h4>
                    <ul>
                      <li>Optimizing workflows for a more connected workspace</li>
                      <li>Emergency Support: Assist evacuation in an emergency</li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="tournament-item">
              <div class="cata green">new</div>
              <a href="#">
                <div class="ti-content">
                  <div class="ti-thumb set-bg" style="background-image: url('../assets/img/tournament/4.png')" />
                  <div class="ti-text">
                    <h4>AI and Analytics for Smart Factory</h4>
                    <ul>
                      <li>Increases the visibility of such systems</li>
                      <li>Enables new kinds of diagnosis possibilities</li>
                    </ul>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>
<script>
// import Carousel from 'vue-carousel/src/Carousel.vue'
// import Slide from 'vue-carousel/src/Slide.vue'
// import MarqueeText from 'vue-marquee-text-component'
// export default {
//   components: {
//     Carousel,
//     Slide,
//     MarqueeText
//   }
// }
</script>
