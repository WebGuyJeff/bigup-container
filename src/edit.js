/**
 * Import WordPress Dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	SelectControl,
	PanelBody,
	PanelRow,
} from '@wordpress/components';

/**
 * Import local editor Styles.
 */
import './editor.scss';

/**
 * Edit function.
 * 
 * This function describes the structure of the block in the context of the editor.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, isSelected, clientId } ) {

	let {
		containerClasses
	} = attributes;

	/**
	 * Control options.
	 * 
	 * These are the settings label/values to populate the dropdown control.
	 *
	 */
	const widthOptions = [
		{ label: 'Default', value: 'toecapsContainer' },
		{ label: 'Full-width', value: 'toecapsContainer toecapsContainer-full' },
		{ label: 'Narrow', value: 'toecapsContainer toecapsContainer-narrow' }
	]

	/**
	 * Set block attributes.
	 */
	const blockProps = useBlockProps( {
		className: containerClasses,
	} );

	/**
	 * Set block attributes with 'selected' state.
	 */
	const blockPropsSelected = useBlockProps( {
		className: containerClasses + ' toecapsContainer-selected',
	} );

	/**
	 * Flag to check if innerBlocks is populated.
	 */
	const hasInnerBlocks = () => {
		const thisBlock = wp.data.select( 'core/block-editor' ).getBlock( clientId );
		if ( thisBlock ) {
			return !! thisBlock.innerBlocks.length;
		} else {
			return false;
		}
	}

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __( 'Container Width' ) }
					initialOpen={ true }
				>
					<PanelRow>
						<SelectControl
							label="width"
							labelPosition="Left"
							title="containerClasses"
							value={ containerClasses }
							options={ widthOptions }
							onChange={ ( value ) =>
								setAttributes( { containerClasses: value } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			{ isSelected && (
				<div { ...blockPropsSelected }>
					<InnerBlocks />
				</div>
			)}

			{ ! isSelected && (
				<div { ...blockProps }>
					{ ! hasInnerBlocks() && (
						<span
							className="toecapsContainer-empty"
						>
							I'm a width-adjustable container - put some blocks inside me!
						</span>
					)}
					<InnerBlocks />
				</div>
			)}

		</>
	);
}
