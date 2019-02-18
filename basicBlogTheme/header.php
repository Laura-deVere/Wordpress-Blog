<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<header>
		<div class="nav-container">
			<nav class="web-nav" id="drop-menu">
				<ul id="menu-list">
					<li><a href="<? echo site_url(); ?>">Home</a></li>
					<li><a href="<? echo site_url('/about'); ?>">About</a></li>
					<li><a href="<? echo get_post_type_archive_link('image'); ?>">Gallery</a></li>
					<li><a href="<? echo site_url('/blog'); ?>">Blog</a></li>
					<li><a href="<? echo site_url('/contact'); ?>">Contact</a></li>
				</ul>
			</nav>
			<nav class="mobile-nav" id="mobile-menu">
				<i class="icon ion-md-menu"></i>
			</nav>
			<div class="social-links" id="header-social-links">
			<ul>
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
	</header>