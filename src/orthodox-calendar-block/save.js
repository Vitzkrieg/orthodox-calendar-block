/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * For picking dates instead of scrolling
 */
 import IconCalendar from "../components/IconCalendar";


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see 	https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @param 	{Object} 	root0
 * @param 	{Array} 	root0.attributes
 *
 * @return 	{Element} 	Element to render.
 */
export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'orthodox-calendar-block',
	} );
	const className = blockProps?.className ?? '';

	const { dp } = attributes;
	const { text_prev, text_curr, text_next, text_prev_acc, text_curr_acc, text_next_acc, text_date_acc } = attributes;

	const dpShow = !!dp;

	const msgLoading = __("Loading...", "orthodox-calendar-block");

	return (
		<div { ...attributes } className={ className }>
			<div className="ocButtonsBar">
				<button type="button" className="ocButton day-previous">
					<span className="screen-reader-text">{text_prev_acc}</span>{text_prev}
				</button>
				<button type="button" className="ocButton day-current">
					<span className="screen-reader-text">{text_curr_acc}</span>{text_curr}
				</button>
				<button type="button" className="ocButton day-next">
					<span className="screen-reader-text">{text_next_acc}</span>{text_next}
				</button>
				{dpShow && (
					<button type="button" className="ocButton day-picker">
						<IconCalendar title={text_date_acc} />
					</button>
				)}
				{dpShow && (<input class="ocDatePicker" aria-label="Date" type="date" hidden/>)}
			</div>
			<div className="ocContainer">{ msgLoading }</div>
		</div>
	);
}
