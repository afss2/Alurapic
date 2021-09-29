<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" v-model="filtro" placeholder="filtre pelo título da foto">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosFiltradas" :key="foto.titulo">

        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :alt="foto.titulo" />
          <meu-botao
              tipo="button"
              rotulo="REMOVER"
              @botaoAtivado="remove(foto)"
              :confirmacao="true"
              estilo="perigo"/>        </meu-painel>

      </li>
    </ul>

  </div>
</template>

<script>
import Painel from "@/components/shared/painel/Painel";
import ImagemResponsiva from "@/components/shared/imagem-responsiva/ImagemResponsiva";
import Botao from "@/components/shared/botao/Botao";

export default {
  name: 'Home',
  components: {
    'meu-painel' : Painel,
    'imagem-responsiva' : ImagemResponsiva,
    'meu-botao': Botao,
  },
  data() {

    return {

      titulo: 'Alurapic',
      fotos: [],
      filtro: '',
    }
  },
  methods: {
    remove(foto) {
      alert('Remover a foto!' + foto.titulo);
    }
  },
  computed: {
    fotosFiltradas() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
  },
  created() {
    this.$axios.get('http://localhost:3000/v1/fotos')
        .then(res => this.fotos = res.data, err => console.log(err));
  },
}
</script>

<style scoped>


.centralizado {

  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {

  display: inline-block;
}
</style>
