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

import { ResizableBox } from "react-resizable";

/**
 * Buttons Bar
 */
import OCButtonBar from "../components/OCButtonsBar";

/**
 * Static props
 */
import {
	languages,
	msgLoading,
	containerClassName,
	filterArrayByArray,
	badStrings,
} from "../Statics";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import MultiCheckboxComponent from "../components/MultiCheckboxComponent";

function getPathArgs(dt, hh, ll, tt, ss, li, ln) {
	const date = new Date();
	const mm = date.getMonth() + 1;
	const dd = date.getDate();
	const yy = date.getFullYear();

	const sec_req = window?.oc_data?.sec_req ?? "";

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
		"&language=" +
		ln +
		"&sec_req=" +
		sec_req +
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
		className: { containerClassName },
	});
	const className = blockProps.className;

	const { dp, dt, hh, ll, ss, tt, pw, ph, pr, pd, ps, ln, dl } = attributes;
	const {
		text_prev,
		text_curr,
		text_next,
		text_prev_acc,
		text_curr_acc,
		text_next_acc,
		text_date,
		text_date_acc,
	} = attributes;
	const {
		text_week_prev,
		text_week_prev_acc,
		text_week_next,
		text_week_next_acc,
		text_language_acc,
	} = attributes;
	const { btn_today, btn_day, btn_week } = attributes;
	const { btn_close, text_close, text_close_acc} = attributes;

	const displayBoxBtnAtts = {
		'btn_close': true,
		'text_close':'X',
		'text_close_acc': 'Close'
	};

	const [error, setError] = useState(false);
	const [loadingPosts, setLoadingPosts] = useState(true);
	const [info, setInfo] = useState(msgLoading);
	const [liveinfo, setLiveinfo] = useState(0);

	const multipleLanguages = ln.length > 1;

	function mcOnChange(value) {
		setAttributes({ ln: value });
	}

	const parsedAtts = filterArrayByArray(attributes, badStrings);

	useEffect(() => {
		setLoadingPosts(true);
		const url = oc_data?.url_day ?? false;

		if (!url) {
			setError("Misconfiguration");
			return;
		}

		const lang = dl === ln ? dl : ln[0];
		const pathArgs = getPathArgs(dt, hh, ll, tt, ss, liveinfo, lang);
		const path = url + pathArgs;

		fetch(path, {
			method: "GET",
			credentials: "same-origin",
		})
			.then((response) => response.json())
			.then((resp) => {
				setInfo(resp.data);
			})
			.catch((err) => {
				setError(err.message);
			})
			.finally(() => setLoadingPosts(false));
	}, [dt, hh, ll, ss, tt, ln, dl, liveinfo]);

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Settings", "orthodox-calendar-block")}
					initialOpen={true}
				>
					<ToggleControl
						label={__("Edit with live info", "orthodox-calendar-block")}
						checked={liveinfo}
						onChange={(li) => setLiveinfo(li ? 1 : 0)}
					/>
					<MultiCheckboxComponent
						title="Languages"
						options={languages}
						values={ln}
						onChange={mcOnChange}
					/>
					{multipleLanguages && (
						<SelectControl
							label={__("Default Language", "orthodox-calendar-block")}
							value={dl}
							onChange={(value) => setAttributes({ dl: value })}
							help={__(
								"The language to show when first loaded",
								"orthodox-calendar",
							)}
							options={[
								{
									value: "en",
									label: __("English", "orthodox-calendar-block"),
									disabled: !ln.includes("en"),
								},
								{
									value: "ru",
									label: __("Russian", "orthodox-calendar-block"),
									disabled: !ln.includes("ru"),
								},
							]}
						/>
					)}
					<ToggleControl
						label={__("Show today button", "orthodox-calendar-block")}
						checked={btn_today}
						onChange={(value) => setAttributes({ btn_today: value ? 1 : 0 })}
					/>
					<ToggleControl
						label={__("Show day button", "orthodox-calendar-block")}
						checked={btn_day}
						onChange={(value) => setAttributes({ btn_day: value ? 1 : 0 })}
					/>
					<ToggleControl
						label={__("Show week button", "orthodox-calendar-block")}
						checked={btn_week}
						onChange={(value) => setAttributes({ btn_week: value ? 1 : 0 })}
					/>
					<ToggleControl
						label={__("Show date picker", "orthodox-calendar-block")}
						checked={dp}
						onChange={(datepick) => setAttributes({ dp: datepick ? 1 : 0 })}
					/>
					<ToggleControl
						label={__("Show date", "orthodox-calendar-block")}
						checked={dt}
						onChange={(sd) => setAttributes({ dt: sd ? 1 : 0 })}
					/>
					<ToggleControl
						label={__("Show a heading before", "orthodox-calendar-block")}
						help={
							hh
								? __("Display header", "orthodox-calendar-block")
								: __("No header", "orthodox-calendar-block")
						}
						checked={hh}
						onChange={(sh) => setAttributes({ hh: sh ? 1 : 0 })}
					/>
					<SelectControl
						label={__("Display Lives of Saints", "orthodox-calendar-block")}
						value={ll}
						onChange={(lives) => setAttributes({ ll: lives })}
						help={__(
							"How to display the lives of the saints",
							"orthodox-calendar",
						)}
						options={[
							{
								value: 0,
								label: __("Do not display", "orthodox-calendar-block"),
							},
							{
								value: 1,
								label: __(
									"all Saints in separate paragraphs",
									"orthodox-calendar-block",
								),
							},
							{
								value: 2,
								label: __(
									"all Saints in one paragraph",
									"orthodox-calendar-block",
								),
							},
							{
								value: 3,
								label: __(
									"major Saints in separate paragraphs",
									"orthodox-calendar-block",
								),
							},
							{
								value: 4,
								label: __(
									"major Saints in one paragraph",
									"orthodox-calendar-block",
								),
							},
							{
								value: 5,
								label: __(
									"major Saints and New Martyrs in separate paragraphs",
									"orthodox-calendar-block",
								),
							},
							{
								value: 6,
								label: __(
									"major Saints and New Martyrs in one paragraph",
									"orthodox-calendar-block",
								),
							},
						]}
					/>
					<SelectControl
						label={__("Scripture Readings", "orthodox-calendar-block")}
						value={ss}
						onChange={(scripts) => setAttributes({ ss: scripts })}
						help={__(
							"How to display the Scripture Readings",
							"orthodox-calendar",
						)}
						options={[
							{
								value: 0,
								label: __("Do not display", "orthodox-calendar-block"),
							},
							{
								value: 1,
								label: __("display with header", "orthodox-calendar-block"),
							},
							{
								value: 2,
								label: __("display without header", "orthodox-calendar-block"),
							},
							{
								value: 3,
								label: __(
									"display with header and wtih verses",
									"orthodox-calendar-block",
								),
							},
							{
								value: 4,
								label: __(
									"display without header and with verses",
									"orthodox-calendar-block",
								),
							},
						]}
					/>
					<SelectControl
						label={__("Display Troparion", "orthodox-calendar-block")}
						value={tt}
						onChange={(trpn) => setAttributes({ tt: trpn })}
						help={__("How to display the Troparion", "orthodox-calendar-block")}
						options={[
							{
								value: 0,
								label: __("Do not display", "orthodox-calendar-block"),
							},
							{
								value: 1,
								label: __("display with header", "orthodox-calendar-block"),
							},
							{
								value: 2,
								label: __("display without header", "orthodox-calendar-block"),
							},
						]}
					/>
					<TextControl
						label={__("Popup window width", "orthodox-calendar-block")}
						value={pw}
						onChange={(popw) => setAttributes({ pw: popw })}
					/>
					<TextControl
						label={__("Popup window height", "orthodox-calendar-block")}
						value={ph}
						onChange={(poph) => setAttributes({ ph: poph })}
					/>
					<ToggleControl
						label={__("Popup window resizable", "orthodox-calendar-block")}
						checked={pr === "yes"}
						onChange={(popr) => setAttributes({ pr: popr ? "yes" : "no" })}
					/>
					<ToggleControl
						label={__("Popup window dependent", "orthodox-calendar-block")}
						checked={pd === "yes"}
						onChange={(popd) => setAttributes({ pd: popd ? "yes" : "no" })}
					/>
					<ToggleControl
						label={__("Popup window scrollbars", "orthodox-calendar-block")}
						checked={ps === "yes"}
						onChange={(pops) => setAttributes({ ps: pops ? "yes" : "no" })}
					/>
				</PanelBody>
				<PanelBody
					title={__("Text", "orthodox-calendar-block")}
					initialOpen={false}
				>
					<TextControl
						label={__("Previous Button Text", "orthodox-calendar-block")}
						value={text_prev}
						onChange={(value) => setAttributes({ text_prev: value })}
					/>
					<TextControl
						label={__(
							"Previous Button Accessibility Text",
							"orthodox-calendar-block",
						)}
						value={text_prev_acc}
						onChange={(value) => setAttributes({ text_prev_acc: value })}
					/>
					<TextControl
						label={__("Current Button Text", "orthodox-calendar-block")}
						value={text_curr}
						onChange={(value) => setAttributes({ text_curr: value })}
					/>
					<TextControl
						label={__(
							"Current Button Accessibility Text",
							"orthodox-calendar-block",
						)}
						value={text_curr_acc}
						onChange={(value) => setAttributes({ text_curr_acc: value })}
					/>
					<TextControl
						label={__("Next Button Text", "orthodox-calendar-block")}
						value={text_next}
						onChange={(value) => setAttributes({ text_next: value })}
					/>
					<TextControl
						label={__(
							"Next Button Accessibility Text",
							"orthodox-calendar-block",
						)}
						value={text_next_acc}
						onChange={(value) => setAttributes({ text_next_acc: value })}
					/>
					<TextControl
						label={__("Date Picker Text", "orthodox-calendar-block")}
						value={text_date}
						onChange={(value) => setAttributes({ text_date: value })}
					/>
					<TextControl
						label={__("Date Picker Text", "orthodox-calendar-block")}
						value={text_date}
						onChange={(value) => setAttributes({ text_date: value })}
					/>
					<TextControl
						label={__(
							"Date Picker Accessibility Text",
							"orthodox-calendar-block",
						)}
						value={text_date_acc}
						onChange={(value) => setAttributes({ text_date_acc: value })}
					/>
					<TextControl
						label={__("Previous Week Button Text", "orthodox-calendar-block")}
						value={text_week_prev}
						onChange={(value) => setAttributes({ text_week_prev: value })}
					/>
					<TextControl
						label={__(
							"Previous Week Button Accessibility Text",
							"orthodox-calendar-block",
						)}
						value={text_week_prev_acc}
						onChange={(value) => setAttributes({ text_week_prev_acc: value })}
					/>
					<TextControl
						label={__("Next Week Button Text", "orthodox-calendar-block")}
						value={text_week_next}
						onChange={(value) => setAttributes({ text_week_next: value })}
					/>
					<TextControl
						label={__(
							"Next Week Button Accessibility Text",
							"orthodox-calendar-block",
						)}
						value={text_week_next_acc}
						onChange={(value) => setAttributes({ text_week_next_acc: value })}
					/>
					<TextControl
						label={__(
							"Language Toggle Button Accessibility Text",
							"orthodox-calendar-block",
						)}
						value={text_language_acc}
						onChange={(value) => setAttributes({ text_language_acc: value })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...parsedAtts} className={className}>
				<OCButtonBar atts={attributes} />
				<div className="ocContainer" id="ocContainer">
					{loadingPosts && <div>{msgLoading}</div>}

					{error && (
						<div>
							<p>
								{__(
									"There was an error loading calendar information.",
									"orthodox-calendar-block",
								)}
							</p>
							<p>{error}</p>
						</div>
					)}

					{!loadingPosts && !error && <RawHTML>{info}</RawHTML>}
				</div>
				<ResizableBox
					minConstraints={[300, 300]}
					resizeHandles={["se"]}
					className={"display-box hidden"}
				>
					<OCButtonBar atts={ displayBoxBtnAtts } />
					<div className={"display-box-content"}></div>
				</ResizableBox>
			</div>
		</>
	);
}
