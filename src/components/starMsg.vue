<template>
	<div>
		<spinner v-if='guodu'></spinner>
		<div v-if='!guodu'>
			<header class="star-header-title">
				<div class="star-back" @click="backLastPage">
					<div></div>
				</div>
				<div class="star-title">{{starMsg.name_en}} {{starMsg.name}}</div>
				<div class="star-back"></div>
			</header>
			<section class="star-msg">
				<img :src="starMsg.avatars.large" :alt="starMsg.avatars.large">
				<div>
					<h3>影星资料</h3>
					<p>{{starMsg.name}}</p>
					<p>{{starMsg.name_en}}</p>
					<p>{{starMsg.gender}}</p>
				</div>
			</section>
			<section class="star-movie-wrap">
				<h3 v-if="starMsg.gender == '男'">他的代表作品</h3>
				<h3 v-if="starMsg.gender == '女'">她的代表作品</h3>
				<div class="star-movie" @click="moviesMsg(item.subject.id)" v-for="item in starMsg.works">
					<div>
						<img :src="item.subject.images.small" :alt="item.subject.images.small">
					</div>
					<div>
						<div>
							<p>{{item.subject.title}}</p>
              				<p v-for="it in item.roles">{{it}}</p>
              				<p>{{item.subject.year}}</p>
						</div>
						<div>
							<star :score="item.subject.rating.average"></star>
              				{{item.subject.rating.average}}分
              				{{item.subject.collect_count}}人评价
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
	import spinner from './spinner/spinner'
	import star from './star/star'
	export default {
		data () {
			return {
				guodu:true,
				starMsg:{}
			}
		},
		components: {
			spinner,
			star
		},
		mounted: function () {
			const starpath = 'https://api.douban.com/v2/movie/celebrity/' + this.$route.params.id

			this.$http.jsonp(starpath).then(function (response) {
				this.guodu = false
				this.starMsg = response.body
				console.log("导演明星信息" + response)
			}).catch(function (response) {
				console.log(response)
			})
		},
		methods: {
			backLastPage: function () {
				window.history.go(-1)
			},
			moviesMsg: function (str) {
				const path = '/moviesMsg/' + str
				this.$router.push({path:path})
			}
		}
	}
</script>
<style>
	.star-header-title {
    display: flex;
    height: 50px;
    width: 100%;
    background-color: #e54847;
    padding: 6px;
    box-sizing: border-box;
  }
  .star-back {
    width: 50px;
    position: relative;
    cursor: pointer;
  }
  .star-back > div {
    position: absolute;
    top: 12px;
    left: 12px;
    height: 13px;
    width: 13px;
    border: 2px solid #fff;
    border-width: 0 0 2px 2px;
    transform: rotate(45deg);
  }
  .star-title {
    flex: 1;
    color: #fff;
    text-align: center;
    line-height: 2;
    font-size: 20px;
    overflow: hidden;
  }
  .star-msg {
    background-color: #b4b1b1;
    padding: 10px;
    overflow: hidden;
  }
  .star-msg img {
    width: 150px;
    height: 200px;
    margin-right: 20px;
  }
  .star-msg div {
    display: inline-block;
    font-size: 20px;
    color: #f0eeee;
    vertical-align: top;
  }
  .star-msg h3 {
    font-size: 25px;
    color: white;
  }
  .star-msg p {
    font-size: 14px;
    color: white;
    margin-top: 8px;
  }

   .star-movie-wrap {
    padding: 10px;
  }
  .star-movie-wrap h3 {
    color: #333;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .star-movie {
    display: flex;
    padding: 5px;
    font-size: 14px;
    border-bottom: 1px solid #d6d3d3;
  }
  .star-movie > div:first-child {
    width: 150px;
    margin-right: 10px;
  }
  .star-movie > div:first-child img{
  	width: 100%;
  }
  .star-movie > div:last-child {
    flex: 1
  }
</style>