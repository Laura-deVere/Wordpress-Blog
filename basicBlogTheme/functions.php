<?php 

function load_blog_files() {
	// load css
	wp_enqueue_style('blog_main_styles', get_stylesheet_uri(), NULL, microtime());
	wp_enqueue_style('ionicons', '//unpkg.com/ionicons@4.4.2/dist/css/ionicons.min.css');
	wp_enqueue_style('google_fonts', '//fonts.googleapis.com/css?family=Montserrat');
	// load JS
	wp_enqueue_script('main-js', get_theme_file_uri('/js/scripts-bundled.js'), NULL, microtime(), true);
	// output js data into html source of webpage, takes 3 args
	// third is an array of data to be made available
	wp_localize_script('main-js', 'blogData', array(
		'root_url' => get_site_url()
	));
}

// add_action calls a function at a specific time(first argument), second needs to be the name of the function you want to call
add_action('wp_enqueue_scripts', 'load_blog_files');

function blog_supports() {
	add_theme_support('post-thumbnails');
	the_post_thumbnail( 'large' );
	the_post_thumbnail( 'medium_large' );
	the_post_thumbnail( 'medium' );
	add_theme_support('title-tag');
	// Activate html5 features
	add_theme_support('html5', array('comment-list', 'comment-form', 'search-form', 'gallery', 'caption'));
}

add_action('after_setup_theme', 'blog_supports');
