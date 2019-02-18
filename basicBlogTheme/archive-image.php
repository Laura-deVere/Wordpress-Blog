<?php
	get_header();
?>
<div class="container">
	<div id="gallery-container">
		<h1>Gallery</h1>
		<div id="selected-img-container"></div>
		<ul id="gallery-list">
			<?php 
				$image = new WP_Query(array(
					'post_type' => 'image'
				));
				while($image->have_posts()) {
					$image->the_post();
					if (has_post_thumbnail()) { 
						$backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id($image->ID), 'large');
					?>
					<li>
						<img class="gallery-thumbnail" data-id="<?php the_ID(); ?>" data-src="<?php echo $backgroundImg[0]; ?>" src="<?php echo $backgroundImg[0]; ?>">
					</li>
					<?php
					
					} ?>	
				<?php }
			?>
		</ul>
	</div>
</div>
<?php
	get_sidebar('right');
	get_footer();
?>