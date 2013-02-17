<?php
/*
Plugin Name: owStickies
Plugin URI: http://www.openwab.com/owstickies/
Description: Image tagging Wordpress plugin
Version: 0.1
Author: Steve Leherpeux
Author URI: http://www.openwab.com
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

define('OWSTICKIES_NAME', 'owStickies');
define('OWSTICKIES_URL', plugin_dir_url(__FILE__));
define('OWSTICKIES_DIR', plugin_dir_path(__FILE__));

load_plugin_textdomain(OWSTICKIES_NAME, false, basename( dirname( __FILE__ ) ) . '/assets/languages' );

function admin_init(){
    
}

function owStickies_load_admin_scripts(){
    
}
add_action('admin_enqueue_scripts', 'owStickies_load_admin_scripts');

function owStickies_load_frontend_scripts(){
    wp_enqueue_style('owStickies-css', OWSTICKIES_URL.'assets/css/owStickies.css');
    wp_enqueue_script('owStickies-js', OWSTICKIES_URL.'assets/js/owStickies.js');
}
add_action('wp_enqueue_scripts', 'owStickies_load_frontend_scripts');
?>
