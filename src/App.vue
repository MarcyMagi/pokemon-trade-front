<script setup>

</script>

<template>
	<header class="wrapper wrapper-parent">
		<img alt="Logo" class="logo" src="@/assets/icons/logo.svg"/>
		<form class="wrapper search-box">
			<input placeholder="Search" class="search-input">
			<div class="wrapper">
				<div class="search-button">
					<button>					
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 513.749 513.749" style="enable-background:new 0 0 513.749 513.749;" xml:space="preserve" width="512" height="512">
							<g>
								<path d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z"/>
							</g>
						</svg>
					</button>
				</div>
			</div>
		</form>
	</header>
</template>

<style lang="scss">
	@import '@/assets/css/reset.css';
	@import '@/assets/css/base.scss';

	.logo {
		width: 10rem;
		margin: 0 1rem 0 0;
	}

	.search-box {
		align-items: stretch;
		background-color: rgb(219, 94, 94);
		padding: 0 1rem;
		border-radius: 2rem;
		width:100%;
		transition: 0.15s;
		max-width: 500px;
		&:focus-within {
			box-shadow: 0 0 7px 0 gray;
		}&:hover {
			box-shadow: 0 0 7px 0 gray;
		}
	}

	.search-input {
		border: 0;
		padding: 0;
		color: white;
		background-color: rgb(219, 94, 94);
		flex: 1;
		&::placeholder {
			color:white;
		}
		&:focus {
			outline: none;
		}
	}

	.search-button {
		width: 1.3rem;
		height: 1.3rem;
		fill: white;
		&:hover {
			
			& svg {
				animation: hop 0.3s infinite;
			}
			
		}
	}

</style>
