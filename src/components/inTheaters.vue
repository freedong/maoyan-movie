<template>
  <div class="in-theaters">
    <!-- 头部栏组件 -->
    <v-header></v-header>
    <!--  电影列表 -->
    <div v-if='!guodu' class="in-theaters-area">
      <div class="in-movies-wrap">
        <div class="in-movies-show" v-for="(item,index) in in_theaters_data_body_subjects">
          <div class="in-movies-show-child">
            <div class="posters">
              <img :src="item.images.small" :alt="item.alt">
            </div>
            <div class="movieMsg">
              <h2>{{ item.title }}</h2>
              <div>***</div>
              <p>{{ item.rating.average }}分</p>
              <p>导演:{{ item.directors[0].name }}</p>
              <p>
                主演:{{ item.casts[0].name }}
                <span v-if="item.casts[1]">,{{ item.casts[1].name }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if='guodu'>正在加载中…………</div>
  </div>
</template>

<script>
  import vHeader from "./header/header"
  export default {
    data() {
      return {
        // 初始化数据
        guodu:true,
        in_theaters_data: {},
        in_theaters_data_body: {},
        in_theaters_data_body_subjects: [],
      }
    },
    components: {
      'v-header': vHeader,
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then(function(response){
        this.guodu = false
        this.in_theaters_data = response
        console.log(this.in_theaters_data)
        this.in_theaters_data_body = response.body
        console.log(this.in_theaters_data_body)
        this.in_theaters_data_body_subjects = response.body.subjects
        console.log(this.in_theaters_data_body_subjects)
      }).catch(function(response){
          console.log(response);
      })
    }
  }
</script>

<style scoped>
  
</style>