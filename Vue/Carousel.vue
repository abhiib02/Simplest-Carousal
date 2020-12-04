<template>
	<div>
		<button @click="prevBtn" class="btn prevBtn">◄</button>
		<button @click="nextBtn" class="btn nextBtn">►</button>
		<div class="carousalContainer">
			<img
				:class="{
					animate__animated: true,
					animate__slideInLeft: active,
					animate__slideInRight: active2
				}"
				:src="this.carousalImages[this.count].image"
				alt=""
			/>
			<h1>{{ carousalImages[this.count].captionText }}</h1>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		carousalImages: Array
	},
	computed: {},
	data() {
		return {
			count: 0,
			active: Boolean,
			active2: Boolean,
			animation_duration: 1000,
			Imagestay_duration: 1000,
			autoplay: false
		};
	},
	created() {
		this.auto();
	},
	methods: {
		auto() {
			this.active2 = !this.active2;
			if (this.autoplay) {
				setTimeout(() => {
					if (this.count > this.carousalImages.length - 2) {
						this.count = 0;
					} else {
						this.count += 1;
					}

					this.auto();
				}, this.animation_duration * 2);
			}
		},
		prevBtn() {
			if (this.count < 1) {
				this.count = this.carousalImages.length - 1;
			} else {
				this.count--;
			}
			this.active2 = false;
			this.active = true;
			//this.activeNext = false;
			setTimeout(() => {
				this.active = !this.active;
			}, this.animation_duration);
		},
		nextBtn() {
			if (this.count > this.carousalImages.length - 2) {
				this.count = 0;
			} else {
				this.count++;
			}
			this.active = false;
			this.active2 = true;
			//this.activePrev = false;
			setTimeout(() => {
				this.active2 = !this.active2;
			}, this.animation_duration);
		}
	}
};
</script>
<style lang="scss" scoped>
html {
	overflow: hidden;
}
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.carousal-container {
	width: 60%;
	margin: auto;
	//border: 5px solid black;
	position: relative;
}

.carousal-container {
	img {
		width: 100%;
		height: 350px;
		object-fit: contain;
	}
}

.no-show {
	display: none;
}
.prevBtn {
	left: 10%;
}
.nextBtn {
	right: 10%;
}
.btn {
	position: absolute;
	top: 50%;
	width: 50px;
	height: 50px;
	border: 1px solid black;
	border-radius: 50%;
	display: flex;
	background: white;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;
	&:hover {
		filter: invert(1);
	}
}
</style>
