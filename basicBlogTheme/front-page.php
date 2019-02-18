<?php get_header(); ?>
	<div class="main-hero">
		<h1><? bloginfo(); ?></h1>
		<p>A Travel and Lifestyle Blog.</p>
			
			<img class="hero-image" src="<?php echo get_theme_file_uri('css/images/front.jpg'); ?>">
	</div>
	<div class="container">
		<div class="single-BP">
			<?php
				$mostRecentPost = new WP_Query(array(
					'post_type' => 'post',
					'posts_per_page' => 1
				));

				while($mostRecentPost->have_posts()) {
					$mostRecentPost->the_post()
					?>
					<h3>
						<?php
							$category = get_the_category();

							if(!empty($category)) {
								echo '<a href="' . esc_url( get_category_link($category[0]->term_id )) . '">' . esc_html($category[0]->name) . '</a>';
							}
						?>
					</h3>
					<h1><?php the_title(); ?></h1>
					<p class="author-link">by <?php the_author_posts_link(); ?></p>
					<p><?php the_excerpt(); ?></p>
					<?php
						$blogPostImg = get_field('blog_post_image');
						if (!empty($blogPostImg)) {
					?>
					<div>
						<img src="<?php echo $blogPostImg['url']; ?>" alt="<?php echo $image['alt']; ?>">
					</div>
					<?php } ?>
					<p>SHARE THE LOVE: </p>
				<?php }
			?>
		</div>
		<div class="main-latest-posts">
			<ul class="main-new-posts">
				<?php
					$latestPost = new WP_Query(array(
						'post_type' => 'post',
						'posts_per_page' => 6
					));

					while($latestPost->have_posts()) {
						$latestPost->the_post(); ?>
						<li>	
							<h3>
								<?php
									$category = get_the_category();

								if(!empty($category)) {
									echo '<a href="' . esc_url( get_category_link($category[0]->term_id )) . '">' . esc_html($category[0]->name) . '</a>';
								}
							?></h3>
							<h2><?php the_title(); ?></h2>
							<?php		
								$blogPostImg = get_field('blog_post_image');
								if (!empty($blogPostImg)) {
							?>	
								<div>
									<img src="<?php echo $blogPostImg['url']; ?>" alt="<?php echo $image['alt']; ?>"">
								</div>
							<?php }
							?>
							<div>
							</div>
							<p><?php echo wp_trim_words(get_the_content(), 25, '...') ?></p>
							<div class="read-more-link">
								<a href="<?php the_permalink(); ?>">Read More</a>
								<i class="icon ion-md-arrow"></i>
							</div>
						</li>
					<?php }
				?>
			</ul>
		</div>
	</div>
<?php 
	get_sidebar('right');
	get_footer(); 
?>