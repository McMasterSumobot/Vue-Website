<template>
  <b-container fluid>
    <b-row class="py-3 toprow" align-h="between">
      <b-col cols="12" md="5">
        <span class="text-white">
          <h2>Beginner Competition</h2>
          <h4>So you want to build a robot?</h4>The Beginner Sumobot Competition is for anyone who has never competed in a Sumobot Competition. Have no idea what you’re doing? That’s fine! We will provide you with the tools you need to build your very own Sumobot! Once competing in the Beginner Competition, you CANNOT enter a Beginner Competition again. Team Fees: $40(Include package) or $10(Buy your own parts).
        </span>
      </b-col>
      <b-col cols="12" md="2">
        <b-img
          width="100px"
          height="100px"
          src="http://sumobot.ca/assets/img/brand/sumo-white.png"
        />
      </b-col>
      <b-col cols="12" md="5">
        <span class="text-white">
          <h2>Advanced Competition</h2>
          <h4>Are you ready for a challenge?</h4>The Advanced Sumobot Competition is for anyone who has competed in a Sumobot Competition in the past, or believes they have the knowledge to compete in a more difficult competition. Once you’ve competed in the Advanced Competition, you CAN NOT enter a Beginner Competition. Team Fees: $40
        </span>
      </b-col>
    </b-row>
    <b-card no-body class="my-3 shadow">
      <b-tabs fill>
        <b-tab>
          <template v-slot:title>
            <h4>Beginner Competition</h4>
          </template>
          <b-card-text>
            <b-row class="px-3">
              <b-col cols="12" xl="3" class="p-0">
                <b-card no-body style="height:100%">
                  <span slot="header">Robot specifications</span>
                  <b-card-body class="text-justify" >
                  <ul class="m-0">
                    <li>Teams must show respect to SumoBot organizers and to each-other.</li>
                    <li>Insults will not be tolerated. Neither will cheating.</li>
                    <li>Penalties range from verbal warnings to complete disqualification based on the severity of the infraction.</li>
                    <li>If a team believes they have been unfairly penalized, their representative may appeal to the referee when the round is over.</li>
                    <li>If the referee chooses not to revoke their penalty, the team will just have to deal with it. Any further objections may lead to additional penalization.</li>
                  </ul>
                </b-card-body>
                </b-card>
              </b-col>
              <b-col cols="12" xl="4" class="p-0">
                <b-card no-body style="height:100%">
                  <span slot="header">Robot specifications</span>
                  <b-card-body class="text-justify">
                    <strong>A team whose robot does not meet these requirements will NOT be permitted to compete in the competition:</strong>
                    <ul class="mt-3">
                      <li>Jamming devices, such as IR LEDs intended to saturate the opponents IR sensors, are not allowed.</li>
                      <li>Parts that could break or damage the ring are not allowed. Do not use parts that are intended to damage the opponent’s robot or its operator. Normal pushes and bangs are not considered intent to damage.</li>
                      <li>Devices that can store liquid, powder, gas or other substances for throwing at the opponent are not allowed.</li>
                      <li>Any flaming devices are not allowed.</li>
                      <li>Devices that throw things at your opponent are not allowed.</li>
                      <li>Sticky substances to improve traction are not allowed. Tires and other components of the robot in contact with the ring must not be able to pick up and hold a standard 8.5” by 11” sheet of paper for more than two seconds.</li>
                      <li>Devices to increase down force, such as a vacuum pump or magnets, are not allowed.</li>
                      <li>All edges, including but not limited to the front scoop, must not be sharp enough to scratch or damage the ring, other robots, or players. Judges or competition officials may require edges that they deem too sharp to be covered with a piece of tape.</li>
                    </ul>
                  </b-card-body>
                </b-card>
              </b-col>
              <b-col cols="12" xl="5" class="p-0">
                <b-card no-body style="height:100%">
                  <span slot="header">Robot specifications</span>
                  <b-card-body class="text-justify">
                    <strong>A team whose robot does not meet these specifications may be permitted to compete in the round robin competition if their failure to meet these specifications DOES NOT result in the possibility of damaging the other competitor’s robots. If the judges decide that the failure to meet the specifications do not result in an advantage, the team may be permitted to participate in the finals, unless another team whose robot meets these specifications has a comparable round robin score. For these rules we shall consider two scores comparable if the smaller score is greater than or equal to 80% of the larger score.</strong>
                    <ul class="mt-3">
                      <li>A robot must fit within a square tube with side length of 10 cm. A robot may expand in size after a match begins, but must not physically separate into pieces. There is no height restriction.</li>
                      <li>The total mass of a robot at the start of a match must be under 500 g.</li>
                      <li>The robot must not affect the terrain of the ring. For example, your robot cannot spray liquid on the ground to slip up its opponent.</li>
                      <li>The robot cannot damage its opponent directly. Only pushing and lifting are allowed; no hitting or stabbing. Magnets are banned due to how they affect electrical components.</li>
                      <li>Adhesives are a bit of a sticky subject. We would prefer if you didn’t use them, as they provide unfair advantages. Please contact us if you are thinking of using adhesives (on wheels, external of robot, etc).</li>
                      <li>Robots must be completely autonomous. No off board instructions or signals allowed.</li>
                      <li>Each robot must be uniquely identifiable. Spectators and officials should be able to identify your robot during a match.</li>
                    </ul>
                  </b-card-body>
                </b-card>
              </b-col>
            </b-row>
          </b-card-text>
        </b-tab>
        <b-tab>
          <template v-slot:title>
            <h4>Advanced Competition</h4>
          </template>
          <b-card-text>Tab contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.toprow {
  background-image: linear-gradient(to right, #c0e, #33c);
}
.btn:focus,
.btn:active {
  box-shadow: none !important;
}
li {
  margin-bottom: 10px;
}
</style>