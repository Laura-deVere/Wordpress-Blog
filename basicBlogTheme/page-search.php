<?php get_header(); 

	while(have_posts()) {
		the_post();
	?>
	<div class="container">
		<?php get_search_form(); ?>
	</div>
<?php }
get_sidebar('right');
get_footer(); 
?>