<?php 
	if(post_password_required() ) {
		return;
	}
?>

<div id="comments" class="comments-area">
	<?php
		if(have_comments()):
	?>
		<h2 class="comment-title">
			<!-- printf prints a formatted string -->
			<?php printf(
				esc_html(_nx( 'One comment on &ldquo;%2$s&rdquo;', '%1$s comments on &ldquo;%2$s&rdquo;', get_comments_number(), 'comments title', 'basicBlogTheme')),
				number_format_i18n(get_comments_number()),
				'<span>' . get_the_title() . '</span>'
			); ?>
		</h2>
		<nav id="comment-nav-top" class="comment-navigation" role="navigation">
			<?php paginate_comments_links( array('prev_text' => '&laquo; PREV', 'next_text' => 'NEXT &raquo;') ); ?>
		</nav>
		<ul class="comment-list">
			<?php 
				$args = array(
					'walker' => null,
					'max_depth' => '',
					'style' => 'ul',
					'callback' => null,
					'end-callback' => null,
					'type' => 'all',
					'reply_text' => 'Reply',
					'page' => '',
					'per_page' => 3,
					'avatar_size' => 16,
					'reverse_top_level' => true,
					'reverse_children' => true,
					'short_ping' => false,
					'echo' => true
				);
				wp_list_comments($args); 
			?>
		</ul>
		<nav>
			<?php paginate_comments_links( array('prev_text' => '&laquo; PREV', 'next_text' => 'NEXT &raquo;') ); ?>
		</nav>
	<?php
		if(!comments_open() && get_comments_number()):
	?>
		<p class="no-comments"><?php esc_html('Comments are closed.', 'basicBlogTheme'); ?></p>
	<?php		
		endif;	
	?>
	<?php 			
		endif; 
	?>
	<?php
		// $comments_args = array(
  //       // change the title of send button 
  //       'label_submit'=>'Post Comment',
  //       // change the title of the reply section
  //       'title_reply'=> 'LEAVE A REPLY',
  //       // remove "Text or HTML to be displayed after the set of comment fields"
  //       'comment_notes_after' => '',
  //       // redefine your own textarea (the comment body)
  //       'comment_field' => '<p class="comment-form-comment"><label for="comment">' . _x( 'Comment', 'noun' ) . '</label><br /><textarea id="comment" name="comment" aria-required="true"></textarea></p>',
  //       'comment_notes_before' => '<p class="comment-notes">' . __( 'Your email address will not be published.' ) . ( $req ? $required_text : '' ) . '</p>'
		// );

		comment_form();

		// apply_filters('comment_form_default_fields', $fields);
	?>
</div>