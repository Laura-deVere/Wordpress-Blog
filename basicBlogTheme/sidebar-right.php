<div class="side-bar-right-container">
	<div class="text-box-right">		
		<div class="right-search">
			<h3>SEARCH THE BLOG</h3>
			<form method="get" action="<?php echo esc_url(site_url('/')); ?>" autocomplete="off">
				<div class="input-container">
					<i class="icon ion-md-search">
						<input type="submit" value="" id="form-submit">
					</i>
				<input id="search-input" type="text" name="s" placeholder="Search...">
				</div>
			</form>			
			<div id="results-box"></div>
		</div>
		<h3><?php bloginfo(); ?></h3>
		<img src="<?php echo get_theme_file_uri('css/images/front.jpg'); ?>">
		<p>A really awesome blog about travel and lifestyle. Words by an amazing human.</p>
		<div class="social-links">
			<ul class="side-bar-social">
				<li>
					<a href="#">
						<i class="icon ion-logo-instagram"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="icon ion-logo-twitter"></i>
					</a>
				</li>
				<li>			
					<a href="#">
						<i class="icon ion-logo-pinterest"></i>
					</a>
				</li>
				<li>
					<a href="#">
						<i class="icon ion-logo-facebook"></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
	<div class="category-list-right">
		<h3>BLOG CATEGORIES</h3>
		<ul>
		<?php 
			$categories = get_categories(array(
				'orderby' => 'name',
				'order' => 'ASC'
			)); 
			foreach ($categories as $category) {
				$category_link = sprintf(
					'<a href="%1$s" alt="%2$s">%3$s</a>',
					esc_url(get_category_link($category->term_id)),
					esc_attr( sprintf( __('View all in %s', 'textdomain'), $category->name )),
					esc_html($category->name)
				);

				echo '<li>' . sprintf( esc_html__( '%s', 'textdomain' ), $category_link ) . '</li> ';
			}
			wp_reset_query();
		?>
		</ul>
	</div>
	<div class="latest-posts-right">
		
		<h3>LATEST POSTS</h3>
			<?php 
				$query = new WP_Query('posts_per_page=4');
				while($query->have_posts()) {
					$query->the_post(); 
					$postImg = get_field('blog_post_image');
					if(!empty($postImg)) { ?>
				<div class="single-post-right">
						<img src="<?php echo $postImg['url']; ?>" alt="<?php $postImg['alt']; ?>">
					<?php }
					?>
					<div>
						<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
						<p><?php the_time('M Y'); ?></p>
						<p><?php echo wp_trim_words(get_the_content(), 8, '...'); ?></p>
					</div>
				</div>
				<?php }
			?>

	</div>
</div>