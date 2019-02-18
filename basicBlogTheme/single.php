<?php 
	get_header(); 
	while(have_posts()) {
		the_post();
?>
	<div class="container">
		<div class="single-BP">
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
			<p><?php the_content(); ?></p>
			<?php
				$blogPostImg = get_field('blog_post_image');
				if (!empty($blogPostImg)) {
			?>
			<div>
				<img src="<?php echo $blogPostImg['url']; ?>" alt="<?php echo $image['alt']; ?>">
			</div>
			<?php } ?>
			<p>SHARE THE LOVE: </p>
			<div>
				<?php
					if ( comments_open() ) {
						comments_template();
					}
				?>
			</div>
		</div>
		<br/>
	</div>
<?php }
	get_sidebar('right');	
	get_footer();
?>