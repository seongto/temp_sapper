import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onMount, e as element, a as space, t as text, q as query_selector_all, c as claim_element, b as detach_dev, f as claim_space, h as children, j as claim_text, k as attr_dev, l as add_location, m as append_dev, p as insert_dev, r as set_data_dev, n as noop, u as binding_callbacks } from './client.fdf18512.js';

/* src/routes/blog/[postId].svelte generated by Svelte v3.25.1 */
const file = "src/routes/blog/[postId].svelte";

function create_fragment(ctx) {
	let title_value;
	let meta0;
	let meta0_content_value;
	let meta1;
	let meta1_content_value;
	let meta2;
	let meta2_content_value;
	let meta3;
	let meta3_content_value;
	let meta4;
	let meta4_content_value;
	let meta5;
	let meta5_content_value;
	let meta6;
	let meta6_content_value;
	let meta7;
	let meta7_content_value;
	let meta8;
	let meta9;
	let meta10;
	let link;
	let t0;
	let h1;
	let t1_value = /*post*/ ctx[0].title + "";
	let t1;
	let t2;
	let t3;
	let div;
	document.title = title_value = "allius blog | " + /*post*/ ctx[0].title;

	const block = {
		c: function create() {
			meta0 = element("meta");
			meta1 = element("meta");
			meta2 = element("meta");
			meta3 = element("meta");
			meta4 = element("meta");
			meta5 = element("meta");
			meta6 = element("meta");
			meta7 = element("meta");
			meta8 = element("meta");
			meta9 = element("meta");
			meta10 = element("meta");
			link = element("link");
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = text(" 입니다.");
			t3 = space();
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-19vqik\"]", document.head);
			meta0 = claim_element(head_nodes, "META", { name: true, content: true });
			meta1 = claim_element(head_nodes, "META", { property: true, content: true });
			meta2 = claim_element(head_nodes, "META", { property: true, content: true });
			meta3 = claim_element(head_nodes, "META", { name: true, content: true });
			meta4 = claim_element(head_nodes, "META", { property: true, content: true });
			meta5 = claim_element(head_nodes, "META", { property: true, content: true });
			meta6 = claim_element(head_nodes, "META", { property: true, content: true });
			meta7 = claim_element(head_nodes, "META", { property: true, content: true });
			meta8 = claim_element(head_nodes, "META", { property: true, content: true });
			meta9 = claim_element(head_nodes, "META", { property: true, content: true });
			meta10 = claim_element(head_nodes, "META", { property: true, content: true });
			link = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			t2 = claim_text(h1_nodes, " 입니다.");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta0, "name", "title");
			attr_dev(meta0, "content", meta0_content_value = "allius blog | " + /*post*/ ctx[0].title);
			add_location(meta0, file, 42, 4, 737);
			attr_dev(meta1, "property", "og:title");
			attr_dev(meta1, "content", meta1_content_value = "allius blog | " + /*post*/ ctx[0].title);
			add_location(meta1, file, 43, 4, 800);
			attr_dev(meta2, "property", "twitter:title");
			attr_dev(meta2, "content", meta2_content_value = "allius blog | " + /*post*/ ctx[0].title);
			add_location(meta2, file, 44, 4, 870);
			attr_dev(meta3, "name", "description");
			attr_dev(meta3, "content", meta3_content_value = /*post*/ ctx[0].description);
			add_location(meta3, file, 45, 4, 945);
			attr_dev(meta4, "property", "og:description");
			attr_dev(meta4, "content", meta4_content_value = /*post*/ ctx[0].description);
			add_location(meta4, file, 46, 4, 1006);
			attr_dev(meta5, "property", "twitter:description");
			attr_dev(meta5, "content", meta5_content_value = /*post*/ ctx[0].description);
			add_location(meta5, file, 47, 4, 1074);
			attr_dev(meta6, "property", "og:image");
			attr_dev(meta6, "content", meta6_content_value = /*post*/ ctx[0].thumnail);
			add_location(meta6, file, 48, 4, 1147);
			attr_dev(meta7, "property", "twitter:image");
			attr_dev(meta7, "content", meta7_content_value = /*post*/ ctx[0].thumnail);
			add_location(meta7, file, 49, 4, 1206);
			attr_dev(meta8, "property", "og:image:alt");
			attr_dev(meta8, "content", "allius blog");
			add_location(meta8, file, 50, 4, 1270);
			attr_dev(meta9, "property", "twitter:image:alt");
			attr_dev(meta9, "content", "allius blog");
			add_location(meta9, file, 51, 4, 1329);
			attr_dev(meta10, "property", "og:type");
			attr_dev(meta10, "content", "website");
			add_location(meta10, file, 52, 4, 1393);
			attr_dev(link, "rel", "icon");
			attr_dev(link, "type", "image/png");
			attr_dev(link, "href", "/allius-favicon-01.png");
			add_location(link, file, 53, 1, 1440);
			add_location(h1, file, 56, 0, 1521);
			attr_dev(div, "class", "post-viewer");
			add_location(div, file, 58, 0, 1549);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta0);
			append_dev(document.head, meta1);
			append_dev(document.head, meta2);
			append_dev(document.head, meta3);
			append_dev(document.head, meta4);
			append_dev(document.head, meta5);
			append_dev(document.head, meta6);
			append_dev(document.head, meta7);
			append_dev(document.head, meta8);
			append_dev(document.head, meta9);
			append_dev(document.head, meta10);
			append_dev(document.head, link);
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div, anchor);
			/*div_binding*/ ctx[2](div);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && title_value !== (title_value = "allius blog | " + /*post*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*post*/ 1 && meta0_content_value !== (meta0_content_value = "allius blog | " + /*post*/ ctx[0].title)) {
				attr_dev(meta0, "content", meta0_content_value);
			}

			if (dirty & /*post*/ 1 && meta1_content_value !== (meta1_content_value = "allius blog | " + /*post*/ ctx[0].title)) {
				attr_dev(meta1, "content", meta1_content_value);
			}

			if (dirty & /*post*/ 1 && meta2_content_value !== (meta2_content_value = "allius blog | " + /*post*/ ctx[0].title)) {
				attr_dev(meta2, "content", meta2_content_value);
			}

			if (dirty & /*post*/ 1 && meta3_content_value !== (meta3_content_value = /*post*/ ctx[0].description)) {
				attr_dev(meta3, "content", meta3_content_value);
			}

			if (dirty & /*post*/ 1 && meta4_content_value !== (meta4_content_value = /*post*/ ctx[0].description)) {
				attr_dev(meta4, "content", meta4_content_value);
			}

			if (dirty & /*post*/ 1 && meta5_content_value !== (meta5_content_value = /*post*/ ctx[0].description)) {
				attr_dev(meta5, "content", meta5_content_value);
			}

			if (dirty & /*post*/ 1 && meta6_content_value !== (meta6_content_value = /*post*/ ctx[0].thumnail)) {
				attr_dev(meta6, "content", meta6_content_value);
			}

			if (dirty & /*post*/ 1 && meta7_content_value !== (meta7_content_value = /*post*/ ctx[0].thumnail)) {
				attr_dev(meta7, "content", meta7_content_value);
			}

			if (dirty & /*post*/ 1 && t1_value !== (t1_value = /*post*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(meta0);
			detach_dev(meta1);
			detach_dev(meta2);
			detach_dev(meta3);
			detach_dev(meta4);
			detach_dev(meta5);
			detach_dev(meta6);
			detach_dev(meta7);
			detach_dev(meta8);
			detach_dev(meta9);
			detach_dev(meta10);
			detach_dev(link);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div);
			/*div_binding*/ ctx[2](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

async function preload(page, session) {
	const resp = await this.fetch(`blog/${page.params.postId}.json`);
	const data = await resp.json();

	if (resp.status === 200) {
		return { post: data.postData };
	} else {
		this.error(resp.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5BpostIdu5D", slots, []);
	let { post } = $$props;
	let viewer;
	let blogStyle = "BlogStyle-001";

	onMount(async () => {
		const viewerModule = await Promise.all([import('./toastui-editor-viewer.c33b4716.js'), ]).then(function(x) { return x[0]; }).then(function (n) { return n.t; }).then(resp => {
			$$invalidate(1, viewer = new resp.default({ el: viewer, initialValue: post.contents }));
		});
	});

	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5BpostIdu5D> was created with unknown prop '${key}'`);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			viewer = $$value;
			$$invalidate(1, viewer);
		});
	}

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({
		preload,
		onMount,
		post,
		viewer,
		blogStyle
	});

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
		if ("viewer" in $$props) $$invalidate(1, viewer = $$props.viewer);
		if ("blogStyle" in $$props) blogStyle = $$props.blogStyle;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post, viewer, div_binding];
}

class U5BpostIdu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5BpostIdu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5BpostIdu5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5BpostIdu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5BpostIdu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5BpostIdu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3Bvc3RJZF0uNzdlYWMyNTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9bcG9zdElkXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UsIHNlc3Npb24pIHtcblxuXHRcdGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLmZldGNoKGBibG9nLyR7cGFnZS5wYXJhbXMucG9zdElkfS5qc29uYCk7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuXG5cblx0XHRpZiAocmVzcC5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0cmV0dXJuIHsgcG9zdDogZGF0YS5wb3N0RGF0YSB9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmVycm9yKHJlc3Auc3RhdHVzLCBkYXRhLm1lc3NhZ2UpO1xuXHRcdH1cblxuXHRcdFxuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHtvbk1vdW50fSBmcm9tICdzdmVsdGUnO1xuXG5cdGV4cG9ydCBsZXQgcG9zdDtcblx0bGV0IHZpZXdlcjtcblxuXHRsZXQgYmxvZ1N0eWxlID0gJ0Jsb2dTdHlsZS0wMDEnO1xuICAgIFxuXG5cdG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3Qgdmlld2VyTW9kdWxlID0gYXdhaXQgaW1wb3J0KCdAdG9hc3QtdWkvZWRpdG9yL2Rpc3QvdG9hc3R1aS1lZGl0b3Itdmlld2VyJylcblx0XHRcdC50aGVuKHJlc3AgPT4ge1xuXHRcdFx0XHR2aWV3ZXIgPSBuZXcgcmVzcC5kZWZhdWx0KHtcblx0XHRcdFx0XHRlbDogdmlld2VyLFxuXHRcdFx0XHRcdGluaXRpYWxWYWx1ZTogcG9zdC5jb250ZW50c1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9KTtcblxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPmFsbGl1cyBibG9nIHwge3Bvc3QudGl0bGV9PC90aXRsZT5cbiAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PVwiYWxsaXVzIGJsb2cgfCB7cG9zdC50aXRsZX1cIiAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiYWxsaXVzIGJsb2cgfCB7cG9zdC50aXRsZX1cIiAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJhbGxpdXMgYmxvZyB8IHtwb3N0LnRpdGxlfVwiIC8+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIntwb3N0LmRlc2NyaXB0aW9ufVwiIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ7cG9zdC5kZXNjcmlwdGlvbn1cIiAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ7cG9zdC5kZXNjcmlwdGlvbn1cIiAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwie3Bvc3QudGh1bW5haWx9XCIgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PVwie3Bvc3QudGh1bW5haWx9XCIgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmFsdFwiIGNvbnRlbnQ9XCJhbGxpdXMgYmxvZ1wiIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlOmFsdFwiIGNvbnRlbnQ9XCJhbGxpdXMgYmxvZ1wiIC8+XG4gICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuXHQ8bGluayByZWw9J2ljb24nIHR5cGU9J2ltYWdlL3BuZycgaHJlZj0nL2FsbGl1cy1mYXZpY29uLTAxLnBuZyc+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+e3Bvc3QudGl0bGV9IOyeheuLiOuLpC48L2gxPlxuXG48ZGl2IGNsYXNzPSdwb3N0LXZpZXdlcicgYmluZDp0aGlzPXt2aWV3ZXJ9PjwvZGl2PlxuXG5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cdEBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9zdHlsZS9jb21tb24uc2Nzcyc7XG5cdFxuXHRcblx0XG48L3N0eWxlPlxuXG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkF3REssR0FBSSxJQUFDLEtBQUs7Ozs7OzREQWZRLEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dGQUNjLEdBQUksSUFBQyxLQUFLOzs7Z0ZBQ0gsR0FBSSxJQUFDLEtBQUs7OztnRkFDTCxHQUFJLElBQUMsS0FBSzs7OzZEQUM5QixHQUFJLElBQUMsV0FBVzs7OzZEQUNULEdBQUksSUFBQyxXQUFXOzs7NkRBQ1gsR0FBSSxJQUFDLFdBQVc7Ozs2REFDM0IsR0FBSSxJQUFDLFFBQVE7Ozs2REFDUixHQUFJLElBQUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBUm5DLEdBQUksSUFBQyxLQUFLOzs7O3dHQUNjLEdBQUksSUFBQyxLQUFLOzs7O3dHQUNILEdBQUksSUFBQyxLQUFLOzs7O3dHQUNMLEdBQUksSUFBQyxLQUFLOzs7O3FGQUM5QixHQUFJLElBQUMsV0FBVzs7OztxRkFDVCxHQUFJLElBQUMsV0FBVzs7OztxRkFDWCxHQUFJLElBQUMsV0FBVzs7OztxRkFDM0IsR0FBSSxJQUFDLFFBQVE7Ozs7cUZBQ1IsR0FBSSxJQUFDLFFBQVE7Ozs7K0RBT3JELEdBQUksSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUF2RFEsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPO09BRXBDLElBQUksU0FBUyxJQUFJLENBQUMsS0FBSyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtPQUNsRCxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUk7O0tBR3hCLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRztXQUNiLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTs7RUFFNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7Ozs7O09BVTNCLElBQUk7S0FDWCxNQUFNO0tBRU4sU0FBUyxHQUFHLGVBQWU7O0NBRy9CLE9BQU87UUFFQSxZQUFZLDZCQUFnQixxQ0FBNkMsMlRBQzdFLElBQUksQ0FBQyxJQUFJO21CQUNULE1BQU0sT0FBTyxJQUFJLENBQUMsT0FBTyxHQUN4QixFQUFFLEVBQUUsTUFBTSxFQUNWLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7O0dBMEJJLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
