<?php
/**
 * Plugin Name:       Bigup Web: Container
 * Plugin URI: https://jeffersonreal.uk
 * Description:       An adjustable width container block to easily create mixed-width pages.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author: Jefferson Real
 * Author URI: https://jeffersonreal.uk
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bigup-container
 *
 * @package bigup_container
 * @version 0.1.0
 * @author Jefferson Real <me@jeffersonreal.uk>
 * @copyright Copyright (c) 2022, Jefferson Real
 * @license GPL2+
 * @link https://jeffersonreal.uk
 */

/**
 * Enqueue admin scripts and styles
 */
function bigup_container_load_admin_scripts_and_styles() {
	if ( ! wp_script_is( 'bigup_icons', 'registered' ) ) {
		wp_register_style( 'bigup_icons', plugin_dir_url( __FILE__ ) . 'dashicons/css/bigup-icons.css', array(), filemtime( plugin_dir_path( __FILE__ ) . 'dashicons/css/bigup-icons.css' ), 'all' );
	}
	if ( ! wp_script_is( 'bigup_icons', 'enqueued' ) ) {
		wp_enqueue_style( 'bigup_icons' );
	}
}
add_action( 'admin_enqueue_scripts', 'bigup_container_load_admin_scripts_and_styles' );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_bigup_container_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'icon' => 'bigup-logo', /* omit 'dashicons-' prefix */
		)
	);
}
add_action( 'init', 'create_block_bigup_container_block_init' );
