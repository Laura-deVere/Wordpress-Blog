<?php 
	get_header(); 
?>	
	<div class="container">
		<p>Search Results for: &ldquo;<?php echo esc_html(get_search_query(false)); ?> &rdquo;</p>
		<?php	
			if(have_posts()) {
				while(have_posts()) {
				the_post();
				?>
				<ul class="single-post-list">		
					<li class="single-BP">
						<h3>
							<?php
								$category = get_the_category();

								if(!empty($category)) {
									echo '<a href="' . esc_url( get_category_link($category[0]->term_id )) . '">' . esc_html($category[0]->name) . '</a>';
								}
							?>
						</h3>

						<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

						<?php		
							$blogPostImg = get_field('blog_post_image');
							if (!empty($blogPostImg)) {
						?>	

							<div>
								<img src="<?php echo $blogPostImg['url']; ?>" alt="<?php echo $image['alt']; ?>">
							</div>

						<?php }
						?>

						<div>
							<p>By <?php the_author_posts_link(); ?> on <?php the_time('F j, Y'); ?></p>
						</div>

						<p><?php the_excerpt(); ?></p>

						<div class="read-more-link">
							<a href="<?php the_permalink(); ?>">Read More</a>
							<i class="icon ion-md-arrow"></i>
						</div>
					</li>
				</ul>				
			<?php	
			} 	
			} else {

				echo '<h1>Nothing Found</h1>';
				echo '<p>Sorry, but nothing matched your search terms. Please try again.</p>';
				get_search_form();
			}
			echo paginate_links();
		?>

	</div>
<?php 
	get_sidebar('right');
	get_footer();
?>