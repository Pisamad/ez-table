<template>
  <div id="app">
    <p>Play to resize of the browser to see the vertical scrollbar attached only to the table body.</p>
    <p>Here, the table width is limited by 1000px and the column #2 width is fixed to 200px </p>
    <div id="container">
      <button @click="changec2">Add text in c2</button>
      <button @click="changec3">Add text in c3</button>
      <button @click="changemarge">Add 10px to bottom-marge</button>
      <div class="tablecontainer">
      <ez-table :bottom-marge="marge">
        <thead slot="thead">
          <th class="c1">C1</th>
          <th class="c2">C2</th>
          <th class="c3">C3</th>
        </thead>
        <tbody slot="tbody">
          <tr v-for="(item, index) in list" :key="index">
              <td class="c1">{{item.e1}}</td>
              <td class="c2">{{item.e2}}</td>
              <td class="c3">{{item.e3}}</td>
          </tr>
        </tbody>
      </ez-table>
      </div>
    </div>
  </div>
</template>

<script>
// import ezTable from './components/ez-table.vue'

export default {
  name: 'app',
  components: {
  },
  data:()=>({
    list: [],
    marge:20
  }),
  mounted:function(){
    for (let i=0; i<20; i++){
      this.list.push({
        e1:i,
        e2:'Bla bla bla',
        e3:'434344'
      })
    }
  },
  methods:{
    changec2: function () {
      this.list[0].e2 += 'and re bla bla'
    },
    changec3: function () {
      this.list[0].e3 += 'and re bla bla'
    },
    changemarge: function () {
      this.marge += 10
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  overflow-x: hidden;
  overflow-y: hidden;
}

thead {
  background-color: aliceblue;
}

#container {
  max-width: 1000px;
}
table, th, td {
  border: 1px solid black;
}

td {
  padding-left: 10px;
}
td.c2 {
  width: 200px;
}

.tablecontainer {
}

</style>
