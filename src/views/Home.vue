<template>
  <b-container fluid>
    <b-row class="py-3 toprow">
      <b-col cols="12" md="7">
        <div class="h-100 mx-auto text-justify text-white" style="max-width:500px">
          <h1>McMaster Sumobot</h1>
          <h3>So you want to build a robot?</h3>
          <p
            style="text-align: left"
          >The McMaster Sumobot Competition is a robotics organization that challenges students to design their own autonomous fighting robots, which are pitted against each other in tournament-style, one-on-one wrestling matches.</p>
          <b-btn>Learn More</b-btn>
          <b-btn>Advanced Competition</b-btn>
        </div>
      </b-col>
      <b-col>
        <b-card class="text-justify">
          <div slot="header" class="d-flex">
            <span>Tutorials</span>
            <b-btn class="ml-auto">Learn More</b-btn>
          </div>We provide handson tutorials for members who don't have any related experience in robotics or engineering.
        </b-card>
        <b-card class="text-justify">
          <div slot="header" class="d-flex">
            <span>Competition</span>
            <b-btn class="ml-auto">Learn More</b-btn>
          </div>Choose from beginner or advanced competition
        </b-card>
      </b-col>
    </b-row>
    <b-row class="py-3">
      <b-col cols="12" md="6">
        <b-card class="h-100 ml-sm-auto text-justify" style="max-width:500px">
          <h3>About Us</h3>The McMaster Sumobot Club is a robotics organization that challenges students to design their own autonomous fighting robots, which are pitted against each other in tournament-style, one-on-one wrestling matches. Last year, we had an amazing turnout, with over 60 engineering participants. This year, we want to do even better.
        </b-card>
      </b-col>
      <b-col cols="12" md="6">
        <b-card class="h-100 mr-auto text-justify" style="max-width:500px">
          <h3>Our competition</h3>gives students a fun, well-rounded, and informative challenge. Students work in teams of four, developing key communication skills as they master the mechanical, electrical, and software systems needed to construct a fighting robot.
          We believe our competition prepares students for a future where autonomous systems are common and varied. Fighting robots might not be the way of tomorrow, but what about robots that treat waste, fight fire, or explore other planets? The McMaster Sumobot Club gives students a lesson that will someday be indispensable.
        </b-card>
      </b-col>
    </b-row>
    <b-row class="py-3">
      <b-col>
        <b-card class="h-100 ml-auto text-justify" style="max-width:500px">
          <h4>Contact Us</h4>
          at <a href="mailto:cr_sbot@mcmaster.ca">cr_sbot@mcmaster.ca</a>
          <h4 class="mt-3">McMaster University</h4>
          <span>1280 Main St W</span>
          <p>Hamilton, ON L8S 4L8</p>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="h-100 mr-auto text-justify" style="max-width:500px">
          Map
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
.toprow {
  background-image: url("http://sumobot.ca/assets/img/theme/IMG_1334.jpg");
  background-size: cover;
}
</style>