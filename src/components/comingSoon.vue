<template>
	<div class="come-soon">
		<v-header></v-header>
		<spinner v-if='guodu'></spinner>
		<div v-if='!guodu' class="co-theaters-area">
			<div class="co-movies-wrap">
				<div class="co-movies-show" v-for="(item,index) in coming_soon_data_body_subjects" @click="showMoreMsg(item.id)">
					<div class="co-movies-show-child">
						<div class="co-posters">
							<img :src="item.images.small" :alt="item.alt">
						</div>
						<div class="co-movieMsg">
							<h2>{{ item.title }}</h2>
							<p>导演:
								<span v-for = "itemname in item.directors">
									 {{ itemname.name }},
								</span>
							</p>
							<p>主演: <!-- {{ item.casts.join(', ') }} -->
								<span v-for = "itemzy in item.casts">
									{{ itemzy.name }},
								</span>
							</p>
							<p>
								类型：{{ item.genres.join(', ') }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import spinner from "./spinner/spinner"
	import vHeader from "./header/header"
	export default {
		data () {
			return {
				guodu:true,
				coming_soon_data: {},
      			coming_soon_data_body: {},
      			coming_soon_data_body_subjects: []
			}
		},
		components: {
			spinner,
			'v-header':vHeader
		},
		mounted: function () {
			const comingurl = 'https://api.douban.com/v2/movie/coming_soon'
			this.$http.jsonp(comingurl).then(function (response) {
				this.guodu = false
				this.coming_soon_data = response
				this.coming_soon_data_body = response.body
				this.coming_soon_data_body_subjects = response.body.subjects
			}).catch(function (response) {
				console.log(response)
			})
		},
		methods: {
			showMoreMsg: function (str) {
				const path = '/moviesMsg/' + str
				this.$router.push({path:path})
			}
		}
	}
</script>


<style scoped>
	body {
    margin: 0;
    padding: 0;
  }
  .co-movies-wrap {
    text-decoration: none;
    font-size: 0;
  }
  .co-movies-show {
    background-color: #f8f8f8;
    cursor: pointer;
    font-size: 0;
    padding: 10px 20px;
  }
  .co-movies-show-child {
    display: flex;
    align-items: flex-end;
    padding-bottom: 10px;
    border-bottom: 1px solid #d6d6d6;
  }
  .co-movieMsg {
    flex: 1;
    padding-left: 20px;
    vertical-align: top;
  }
  .co-movieMsg h2 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .co-movies-show p {
    font-size: 14px;
    color: #666;
  }
  .co-posters img{
  	width: 80px;
  }
</style>