<template>
  <div class="home">
    <h2>GraphQl Implementation with Vue</h2>
    <div>
      <BookList />
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookList from "@/components/BookList";




export default {
  name: "home",
  components: {
    BookList,
    
  }
};
</script>
<style lang="scss" scoped>
.home{
  background: #eeeeee;
}
</style>
