<template>
    <!-- 
        BACKGROUND COMPONENT
        Contains a ParticlesJS dynamic background,
        if necessary will change the hardcoded colors
        and settings to something more flexible, intended
        to use alongside the SASS variables
     -->
    <div>
        <vue-particles 
            color='#E74C3C'
            linesColor='#E74C3C'
            :particleSize="6"
            :particleOpacity=".3"
            class='particlesbg'
        />
    </div>
</template>

<script>
export default {
}
</script>

 <style lang="sass" scoped>
    .particlesbg
        position: absolute
        top: 0
        bottom: -12px
        left: 0
        right: 0
        z-index: -1
        background: #2C3E50
 </style>
 