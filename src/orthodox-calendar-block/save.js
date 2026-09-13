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
		className: 'orthodox-calendar',
	} );
	const className = blockProps?.className ?? '';

	const { dp } = attributes;

	const dpShow = !!dp;

	const msgLoading = 'Loading...';

	return (
		<div { ...attributes } className={ className }>
			<div className="ocButtonsBar">
				{dpShow && (
					<button type="button" className="ocButton day-picker">
						<IconCalendar />
					</button>
				)}
				<button type="button" className="ocButton day-previous">
					<span className="screen-reader-text">Previous Day</span>❰
				</button>
				<button type="button" className="ocButton day-current">
					<span className="screen-reader-text">Today</span>▇
				</button>
				<button type="button" className="ocButton day-next">
					<span className="screen-reader-text">Next Day</span>❱
				</button>
			</div>
			{dpShow && (<input class="ocDatePicker" aria-label="Date" type="date" hidden/>)}
			<div className="ocContainer">{ msgLoading }</div>
		</div>
	);
}
