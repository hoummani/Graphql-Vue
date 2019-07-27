<template>
  <div class="listBook">
    <h4>List of Books !</h4>
    <h4 v-if="loading">LOADING...</h4>
    <ul id="book-list" v-for="item in ALL_BOOKS" :key="item.id">
      <li>
          {{item.id}}
          <ul>
              <li>{{item.name}}</li>
              <li>{{item.genre}}</li>
          </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import ALL_BOOKS_QUERY from '../graph-constants/graphql';
export default {
    data(){
        return{
            ALL_BOOKS:[],
            loading:0
        }
    },
    apollo:{
        ALL_BOOKS:{
            query:ALL_BOOKS_QUERY
        }
    }
};
</script>
