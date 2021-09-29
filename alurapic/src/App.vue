<template>
  <div class="corpo">
    <meu-menu :rotas="routes" />
    <router-view v-slot="{ Component }">
      <transition-group name="pagina">
        <component :is="Component" />
      </transition-group>
    </router-view>
  </div>
</template>

<script>
import { routes } from "@/routes";
import Menu from "@/components/shared/menu/Menu";
export default {
  name: 'App',
  components: {
      'meu-menu': Menu
    },
  data() {
    return {
      routes
    }
  }

}
</script>

<style scoped>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.pagina-enter, .pagina-leave-active {
  opacity: 0
}

.pagina-enter-active, .pagina-leave-active {
  transition: opacity .4s
}
</style>
