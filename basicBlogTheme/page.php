<?php get_header(); 

	while(have_posts()) {
		the_post();
	?>
	<div class="container">
	<h1><?php the_title(); ?></h1>

	<p><?php the_content(); ?></p>
	</div>
<?php }
get_sidebar('right');
get_footer(); 
?>