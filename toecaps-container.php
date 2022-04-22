<?php
/**
 * Plugin Name:       Toecaps Container
 * Description:       Example block written with ESNext standard and JSX support - build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       toecaps-container
 *
 * @package           create-block
 */

/**
 * Enqueue admin scripts and styles
 */
function toecaps_container_load_admin_scripts_and_styles() {
	if ( ! wp_script_is( 'custom-script', 'registered' ) ) {
		wp_register_style( 'toecaps-icons', get_template_directory_uri() . '/dashicons/css/toecaps-icons.css', array(), filemtime( get_template_directory() . '/dashicons/css/toecaps-icons.css' ), 'all' );
	}
	if ( ! wp_script_is( 'custom-script', 'enqueued' ) ) {
		wp_enqueue_style( 'toecaps-icons' );
	}
}
add_action( 'admin_enqueue_scripts', 'toecaps_container_load_admin_scripts_and_styles' );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_toecaps_container_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'icon' => 'toecaps-boot', /* omit 'dashicons-' prefix */
		)
	);
}
add_action( 'init', 'create_block_toecaps_container_block_init' );
