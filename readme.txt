=== Bigup Web: Container ===
Contributors:      Jefferson Real
Tags:              block, container, section, layout, full-width
Tested up to:      5.9
Stable tag:        0.1.0
License:           GPL-3.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-3.0.html

An adjustable width container block to easily create mixed-width pages.

== Description ==

This block provides a container element to allow control of content width at a per-block level. With
it, it is possible to set blocks to full-width, 'normal' column width and narrow width. The maximum
width will be limited by the page template layout, which is why this container should be used with
full-width template for maximum flexibility. Content width should be controlled at a content-
creation level, not a theme development level!

This is a _very_ simple plugin designed to be unobtrusive and somewhat free of design opinion. Due
to it's simplicity, there are few dependencies and a tiny footprint.

== Installation ==

Install the plugin through the WP admin plugin screen by using the 'Add new' button and selecting
the zip.

== Changelog ==

= 0.1.0 =
* Release

Phase 1 implemented offering 3 widths:

**Default** - A responsive and sensible large column with a max width at 1280px.
**Full-width** - 100% of parent width.
**narrow** - A tighter responsive column with a max width of 1024px.

 - No height affecting styles
 - 24px padding
 - Auto horizontal margin (self-centre)