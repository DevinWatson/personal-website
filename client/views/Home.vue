<template>
<div class="container-fluid text-center">
  <div class="row justify-content-md-center">
    <div class="col col-lg-12">
        <img class="rounded-circle profile-img" src="../../static/me.jpg"/> 
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col col-lg-12">
        <div class="large-text"><strong>Devin Watson</strong></div>
    </div>
  </div>
  <div class="row justify-content-md-center">
    <div class="col col-lg-12">
        <div class="medium-text">Team Lead / Senior Software Engineer</div>
    </div>
  </div>
    <div class="row justify-content-md-center links-row">
      <div class="col col-lg-8 text-center">
        <div class="row justify-content-md-center links-row">
          <div class="col col-lg-1 text-center">
            <font-awesome-icon :icon="['fab', 'github']" class="clickable-icon"/>
          </div>
          <div class="col col-lg-1 text-center">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="clickable-icon"/>
          </div>
          <div class="col col-lg-1 text-center">
            <font-awesome-icon icon="file-alt" class="clickable-icon"/>
          </div>
          <div class="col col-lg-1 text-center">
            <font-awesome-icon icon="envelope" class="clickable-icon"/>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Questrial');
  .container-fluid {
    font-family: 'Questrial', sans-serif;
    color: gray;
    padding-top: 2vh;
  }

  .profile-img {
    max-height: 20vh;
    margin: 1vh;
    border:5px solid gray;
    margin: 0vh;
  }

  .large-text {
    font-size: 8vh;
  }

  .medium-text {
    font-size: 4vh;
  }

  .links-row {
    font-size: 4vh;
  }

  .fa-icon {
    width: auto;
    height: 1em; /* or any other relative font sizes */

    /* You would have to include the following two lines to make this work in Safari */
    max-width: 100%;
    max-height: 100%;
  }

  .clickable-icon {
    cursor: pointer
  }

</style>
