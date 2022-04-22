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
export default function save( attributes ) {

/* jeffDebug */
/* Why is this attribute double-nested? */
/* This is not the case in edit.js */
console.log( 'contattributes.attributes.containerClassesainerClasses' );
console.log( attributes.attributes.containerClasses );

	/**
	 * Wp attributes are an alias for React props.
	 */
	const {
		containerClasses,
	} = attributes.attributes;

console.log( 'containerClasses' );
console.log( containerClasses );

	/**
	 * Add container classname(s) to props
	 */ 
	const blockProps = useBlockProps.save( {
		className: containerClasses,
	} );

	return (
		<div { ...blockProps  }>
			{__(
				'Toecaps Container - hello from the saved content!',
				'toecaps-container'
			)}
			<InnerBlocks.Content />
		</div>
	);
}
