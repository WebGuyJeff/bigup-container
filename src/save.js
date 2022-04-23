/**
 * Import WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';


/**
 * Save function.
 * 
 * Handle parsing the block into final markup as post content
 *
 * @return {WPElement} Element to render.
 */
export default function Save( attributes ) {

/* jeffDebug */
/* Why is this attribute double-nested? */
/* This is not the case in edit.js */
console.log( 'attributes.attributes.containerClasses' );
console.log( attributes.attributes.containerClasses );

	/**
	 * Wp attributes are an alias for React props.
	 */
	const {
		containerClasses,
	} = attributes.attributes;

	/**
	 * Add container classname(s) to props
	 */ 
	const blockProps = useBlockProps.save( {
		className: containerClasses,
	} );

	return (
		<div { ...blockProps  }>
			<InnerBlocks.Content />
		</div>
	);
}
