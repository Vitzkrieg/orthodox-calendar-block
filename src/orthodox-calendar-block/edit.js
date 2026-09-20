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
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

import {
	TextControl,
	ToggleControl,
	PanelBody,
	SelectControl,
} from "@wordpress/components";


import { RawHTML, useEffect, useState } from "@wordpress/element";

/**
 * For sanitizing content
 */
import DOMPurify from "dompurify";

/**
 * For picking dates instead of scrolling
 */
import IconCalendar from "../components/IconCalendar";


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";


function getPathArgs(dt, hh, ll, tt, ss, li) {
	const date = new Date();
	const mm = date.getMonth() + 1;
	const dd = date.getDate();
	const yy = date.getFullYear();

	const ocnonce = window?.oc_data?.ocnonce ?? "";

	const args =
		"&month=" +
		mm +
		"&today=" +
		dd +
		"&year=" +
		yy +
		"&dt=" +
		dt +
		"&header=" +
		hh +
		"&lives=" +
		ll +
		"&trp=" +
		tt +
		"&scripture=" +
		ss +
		"&liveinfo=" +
		li +
		"&ocnonce=" +
		ocnonce +
		"&editor=" +
		1;

	return args;
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @param {Object} root0
 * @param {Array} root0.attributes
 * @param {Function} root0.setAttributes
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({
		className: "orthodox-calendar-block",
	});
	const className = blockProps.className;

	const { dp, dt, hh, ll, ss, tt, pw, ph, pr, pd, ps } = attributes;

	const msgLoading = "Loading...";

	const [error, setError] = useState(false);
	const [loadingPosts, setLoadingPosts] = useState(true);
	const [info, setInfo] = useState(msgLoading);
	const [liveinfo, setLiveinfo] = useState(0);

	useEffect(() => {
		setLoadingPosts(true);
		const pathArgs = getPathArgs(dt, hh, ll, tt, ss, liveinfo);
		const url = oc_data?.url ?? false;

		if (!url) {
			setError("Misconfiguration");
			return;
		}

		const path = url + pathArgs;

		fetch(path, {
			method: "GET",
			credentials: "same-origin",
		})
			.then((response) => response.json())
			.then((resp) => {
				const cleanHtml = DOMPurify.sanitize(resp.data, {
					USE_PROFILES: { html: true },
				});
				setInfo(cleanHtml);
			})
			.catch((err) => {
				setError(err.message);
			})
			.finally(() => setLoadingPosts(false));
	}, [dt, hh, ll, ss, tt, liveinfo]);

	const dpShow = !!dp;

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Settings", "orthodox-calendar")}
					initialOpen={true}
				>
					<ToggleControl
						label={__("Edit with live info", "orthodox-calendar")}
						checked={liveinfo}
						onChange={(li) => setLiveinfo(li ? 1 : 0)}
					/>
					<ToggleControl
						label={__("Show date picker", "orthodox-calendar")}
						checked={dp}
						onChange={(datepick) => setAttributes({ dp: datepick ? 1 : 0 })}
					/>
					<ToggleControl
						label={__("Show date", "orthodox-calendar")}
						checked={dt}
						onChange={(sd) => setAttributes({ dt: sd ? 1 : 0 })}
					/>
					<ToggleControl
						label={__("Show a heading before", "orthodox-calendar")}
						help={
							hh
								? __("Display header", "orthodox-calendar")
								: __("No header", "orthodox-calendar")
						}
						checked={hh}
						onChange={(sh) => setAttributes({ hh: sh ? 1 : 0 })}
					/>
					<SelectControl
						label={__("Display Lives of Saints", "orthodox-calendar")}
						value={ll}
						onChange={(lives) => setAttributes({ ll: lives })}
						help={__(
							"How to display the lives of the saints",
							"orthodox-calendar",
						)}
						options={[
							{
								value: 0,
								label: __("Do not display", "orthodox-calendar"),
							},
							{
								value: 1,
								label: __(
									"all Saints in separate paragraphs",
									"orthodox-calendar",
								),
							},
							{
								value: 2,
								label: __("all Saints in one paragraph", "orthodox-calendar"),
							},
							{
								value: 3,
								label: __(
									"major Saints in separate paragraphs",
									"orthodox-calendar",
								),
							},
							{
								value: 4,
								label: __("major Saints in one paragraph", "orthodox-calendar"),
							},
							{
								value: 5,
								label: __(
									"major Saints and New Martyrs in separate paragraphs",
									"orthodox-calendar",
								),
							},
							{
								value: 6,
								label: __(
									"major Saints and New Martyrs in one paragraph",
									"orthodox-calendar",
								),
							},
						]}
					/>
					<SelectControl
						label={__("Scripture Readings", "orthodox-calendar")}
						value={ss}
						onChange={(scripts) => setAttributes({ ss: scripts })}
						help={__(
							"How to display the Scripture Readings",
							"orthodox-calendar",
						)}
						options={[
							{
								value: 0,
								label: __("Do not display", "orthodox-calendar"),
							},
							{
								value: 1,
								label: __("display with header", "orthodox-calendar"),
							},
							{
								value: 2,
								label: __("display without header", "orthodox-calendar"),
							},
							{
								value: 3,
								label: __(
									"display with header and wtih verses",
									"orthodox-calendar",
								),
							},
							{
								value: 4,
								label: __(
									"display without header and with verses",
									"orthodox-calendar",
								),
							},
						]}
					/>
					<SelectControl
						label={__("Display Troparion", "orthodox-calendar")}
						value={tt}
						onChange={(trpn) => setAttributes({ tt: trpn })}
						help={__("How to display the Troparion", "orthodox-calendar")}
						options={[
							{
								value: 0,
								label: __("Do not display", "orthodox-calendar"),
							},
							{
								value: 1,
								label: __("display with header", "orthodox-calendar"),
							},
							{
								value: 2,
								label: __("display without header", "orthodox-calendar"),
							},
						]}
					/>
					<TextControl
						label="Popup window width"
						value={pw}
						onChange={(popw) => setAttributes({ pw: popw })}
					/>
					<TextControl
						label="Popup window height"
						value={ph}
						onChange={(poph) => setAttributes({ ph: poph })}
					/>
					<ToggleControl
						label={__("Popup window resizable", "orthodox-calendar")}
						checked={pr === "yes"}
						onChange={(popr) => setAttributes({ pr: popr ? "yes" : "no" })}
					/>
					<ToggleControl
						label={__("Popup window dependent", "orthodox-calendar")}
						checked={pd === "yes"}
						onChange={(popd) => setAttributes({ pd: popd ? "yes" : "no" })}
					/>
					<ToggleControl
						label={__("Popup window scrollbars", "orthodox-calendar")}
						checked={ps === "yes"}
						onChange={(pops) => setAttributes({ ps: pops ? "yes" : "no" })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...attributes} className={className}>
				<div className="ocButtonsBar">
					<button type="button" className="ocButton day-previous">
						<span className="screen-reader-text">Previous Day</span>❰
					</button>
					<button type="button" className="ocButton day-current">
						<span className="screen-reader-text">Today</span>▇
					</button>
					<button type="button" className="ocButton day-next">
						<span className="screen-reader-text">Next Day</span>❱
					</button>
					{dpShow && (
						<button type="button" className="ocButton day-picker">
							<IconCalendar />
						</button>
					)}
					{dpShow && (<input class="ocDatePicker" aria-label="Date" type="date" hidden />)}
				</div>
				<div className="ocContainer" id="ocContainer">
					{loadingPosts && <div>{msgLoading}</div>}

					{error && (
						<div>
							<p>There was an error loading calendar information.</p>
							<p>{error}</p>
						</div>
					)}

					{!loadingPosts && !error && <RawHTML>{info}</RawHTML>}
				</div>
			</div>
		</>
	);
}
