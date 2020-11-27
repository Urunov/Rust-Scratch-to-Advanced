(function() {var implementors = {};
implementors["ab_glyph_rasterizer"] = [{"text":"impl Default for Point","synthetic":false,"types":[]}];
implementors["adler"] = [{"text":"impl Default for Adler32","synthetic":false,"types":[]}];
implementors["adler32"] = [{"text":"impl Default for RollingAdler32","synthetic":false,"types":[]}];
implementors["byteorder"] = [{"text":"impl Default for BigEndian","synthetic":false,"types":[]},{"text":"impl Default for LittleEndian","synthetic":false,"types":[]}];
implementors["core_foundation"] = [{"text":"impl Default for CFMutableAttributedString","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Default for CFMutableDictionary&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl Default for CFTimeZone","synthetic":false,"types":[]},{"text":"impl Default for CFUUID","synthetic":false,"types":[]}];
implementors["core_foundation_sys"] = [{"text":"impl Default for CFUUIDBytes","synthetic":false,"types":[]}];
implementors["core_graphics"] = [{"text":"impl Default for CGSize","synthetic":false,"types":[]},{"text":"impl Default for CGPoint","synthetic":false,"types":[]},{"text":"impl Default for CGRect","synthetic":false,"types":[]},{"text":"impl Default for CGAffineTransform","synthetic":false,"types":[]}];
implementors["crc32fast"] = [{"text":"impl Default for Hasher","synthetic":false,"types":[]}];
implementors["crossbeam_channel"] = [{"text":"impl&lt;'a&gt; Default for Select&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_deque"] = [{"text":"impl&lt;T&gt; Default for Injector&lt;T&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T:&nbsp;?Sized + Pointable&gt; Default for Atomic&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized + Pointable, '_&gt; Default for Shared&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl Default for Collector","synthetic":false,"types":[]}];
implementors["crossbeam_utils"] = [{"text":"impl&lt;T:&nbsp;Default&gt; Default for AtomicCell&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Default&gt; Default for CachePadded&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Default for Backoff","synthetic":false,"types":[]},{"text":"impl Default for Parker","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Default&gt; Default for ShardedLock&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Default for WaitGroup","synthetic":false,"types":[]}];
implementors["deflate"] = [{"text":"impl Default for Compression","synthetic":false,"types":[]},{"text":"impl Default for SpecialOptions","synthetic":false,"types":[]},{"text":"impl Default for CompressionOptions","synthetic":false,"types":[]}];
implementors["event_loop"] = [{"text":"impl Default for EventSettings","synthetic":false,"types":[]}];
implementors["fnv"] = [{"text":"impl Default for FnvHasher","synthetic":false,"types":[]}];
implementors["gif"] = [{"text":"impl&lt;'a&gt; Default for Frame&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["gleam"] = [{"text":"impl Default for GlType","synthetic":false,"types":[]}];
implementors["glutin"] = [{"text":"impl Default for PixelFormatRequirements","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; Default for GlAttributes&lt;S&gt;","synthetic":false,"types":[]}];
implementors["graphics"] = [{"text":"impl Default for DrawState","synthetic":false,"types":[]}];
implementors["image"] = [{"text":"impl Default for Rgbe8Pixel","synthetic":false,"types":[]},{"text":"impl Default for PixelDensity","synthetic":false,"types":[]},{"text":"impl Default for CompressionType","synthetic":false,"types":[]},{"text":"impl Default for FilterType","synthetic":false,"types":[]},{"text":"impl Default for Frame","synthetic":false,"types":[]}];
implementors["input"] = [{"text":"impl Default for ModifierKey","synthetic":false,"types":[]}];
implementors["miniz_oxide"] = [{"text":"impl Default for CompressorOxide","synthetic":false,"types":[]},{"text":"impl Default for DecompressorOxide","synthetic":false,"types":[]},{"text":"impl Default for InflateState","synthetic":false,"types":[]}];
implementors["png"] = [{"text":"impl Default for FrameControl","synthetic":false,"types":[]},{"text":"impl Default for Info","synthetic":false,"types":[]},{"text":"impl Default for StreamingDecoder","synthetic":false,"types":[]},{"text":"impl Default for Limits","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Default for TokenStream","synthetic":false,"types":[]}];
implementors["rayon_core"] = [{"text":"impl Default for ThreadPoolBuilder","synthetic":false,"types":[]},{"text":"impl Default for Configuration","synthetic":false,"types":[]}];
implementors["rusttype"] = [{"text":"impl&lt;N:&nbsp;Default&gt; Default for Point&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;Default&gt; Default for Vector&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;Default&gt; Default for Rect&lt;N&gt;","synthetic":false,"types":[]}];
implementors["serde"] = [{"text":"impl Default for IgnoredAny","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Default for Underscore","synthetic":false,"types":[]},{"text":"impl Default for Abstract","synthetic":false,"types":[]},{"text":"impl Default for As","synthetic":false,"types":[]},{"text":"impl Default for Async","synthetic":false,"types":[]},{"text":"impl Default for Auto","synthetic":false,"types":[]},{"text":"impl Default for Await","synthetic":false,"types":[]},{"text":"impl Default for Become","synthetic":false,"types":[]},{"text":"impl Default for Box","synthetic":false,"types":[]},{"text":"impl Default for Break","synthetic":false,"types":[]},{"text":"impl Default for Const","synthetic":false,"types":[]},{"text":"impl Default for Continue","synthetic":false,"types":[]},{"text":"impl Default for Crate","synthetic":false,"types":[]},{"text":"impl Default for Default","synthetic":false,"types":[]},{"text":"impl Default for Do","synthetic":false,"types":[]},{"text":"impl Default for Dyn","synthetic":false,"types":[]},{"text":"impl Default for Else","synthetic":false,"types":[]},{"text":"impl Default for Enum","synthetic":false,"types":[]},{"text":"impl Default for Extern","synthetic":false,"types":[]},{"text":"impl Default for Final","synthetic":false,"types":[]},{"text":"impl Default for Fn","synthetic":false,"types":[]},{"text":"impl Default for For","synthetic":false,"types":[]},{"text":"impl Default for If","synthetic":false,"types":[]},{"text":"impl Default for Impl","synthetic":false,"types":[]},{"text":"impl Default for In","synthetic":false,"types":[]},{"text":"impl Default for Let","synthetic":false,"types":[]},{"text":"impl Default for Loop","synthetic":false,"types":[]},{"text":"impl Default for Macro","synthetic":false,"types":[]},{"text":"impl Default for Match","synthetic":false,"types":[]},{"text":"impl Default for Mod","synthetic":false,"types":[]},{"text":"impl Default for Move","synthetic":false,"types":[]},{"text":"impl Default for Mut","synthetic":false,"types":[]},{"text":"impl Default for Override","synthetic":false,"types":[]},{"text":"impl Default for Priv","synthetic":false,"types":[]},{"text":"impl Default for Pub","synthetic":false,"types":[]},{"text":"impl Default for Ref","synthetic":false,"types":[]},{"text":"impl Default for Return","synthetic":false,"types":[]},{"text":"impl Default for SelfType","synthetic":false,"types":[]},{"text":"impl Default for SelfValue","synthetic":false,"types":[]},{"text":"impl Default for Static","synthetic":false,"types":[]},{"text":"impl Default for Struct","synthetic":false,"types":[]},{"text":"impl Default for Super","synthetic":false,"types":[]},{"text":"impl Default for Trait","synthetic":false,"types":[]},{"text":"impl Default for Try","synthetic":false,"types":[]},{"text":"impl Default for Type","synthetic":false,"types":[]},{"text":"impl Default for Typeof","synthetic":false,"types":[]},{"text":"impl Default for Union","synthetic":false,"types":[]},{"text":"impl Default for Unsafe","synthetic":false,"types":[]},{"text":"impl Default for Unsized","synthetic":false,"types":[]},{"text":"impl Default for Use","synthetic":false,"types":[]},{"text":"impl Default for Virtual","synthetic":false,"types":[]},{"text":"impl Default for Where","synthetic":false,"types":[]},{"text":"impl Default for While","synthetic":false,"types":[]},{"text":"impl Default for Yield","synthetic":false,"types":[]},{"text":"impl Default for Add","synthetic":false,"types":[]},{"text":"impl Default for AddEq","synthetic":false,"types":[]},{"text":"impl Default for And","synthetic":false,"types":[]},{"text":"impl Default for AndAnd","synthetic":false,"types":[]},{"text":"impl Default for AndEq","synthetic":false,"types":[]},{"text":"impl Default for At","synthetic":false,"types":[]},{"text":"impl Default for Bang","synthetic":false,"types":[]},{"text":"impl Default for Caret","synthetic":false,"types":[]},{"text":"impl Default for CaretEq","synthetic":false,"types":[]},{"text":"impl Default for Colon","synthetic":false,"types":[]},{"text":"impl Default for Colon2","synthetic":false,"types":[]},{"text":"impl Default for Comma","synthetic":false,"types":[]},{"text":"impl Default for Div","synthetic":false,"types":[]},{"text":"impl Default for DivEq","synthetic":false,"types":[]},{"text":"impl Default for Dollar","synthetic":false,"types":[]},{"text":"impl Default for Dot","synthetic":false,"types":[]},{"text":"impl Default for Dot2","synthetic":false,"types":[]},{"text":"impl Default for Dot3","synthetic":false,"types":[]},{"text":"impl Default for DotDotEq","synthetic":false,"types":[]},{"text":"impl Default for Eq","synthetic":false,"types":[]},{"text":"impl Default for EqEq","synthetic":false,"types":[]},{"text":"impl Default for Ge","synthetic":false,"types":[]},{"text":"impl Default for Gt","synthetic":false,"types":[]},{"text":"impl Default for Le","synthetic":false,"types":[]},{"text":"impl Default for Lt","synthetic":false,"types":[]},{"text":"impl Default for MulEq","synthetic":false,"types":[]},{"text":"impl Default for Ne","synthetic":false,"types":[]},{"text":"impl Default for Or","synthetic":false,"types":[]},{"text":"impl Default for OrEq","synthetic":false,"types":[]},{"text":"impl Default for OrOr","synthetic":false,"types":[]},{"text":"impl Default for Pound","synthetic":false,"types":[]},{"text":"impl Default for Question","synthetic":false,"types":[]},{"text":"impl Default for RArrow","synthetic":false,"types":[]},{"text":"impl Default for LArrow","synthetic":false,"types":[]},{"text":"impl Default for Rem","synthetic":false,"types":[]},{"text":"impl Default for RemEq","synthetic":false,"types":[]},{"text":"impl Default for FatArrow","synthetic":false,"types":[]},{"text":"impl Default for Semi","synthetic":false,"types":[]},{"text":"impl Default for Shl","synthetic":false,"types":[]},{"text":"impl Default for ShlEq","synthetic":false,"types":[]},{"text":"impl Default for Shr","synthetic":false,"types":[]},{"text":"impl Default for ShrEq","synthetic":false,"types":[]},{"text":"impl Default for Star","synthetic":false,"types":[]},{"text":"impl Default for Sub","synthetic":false,"types":[]},{"text":"impl Default for SubEq","synthetic":false,"types":[]},{"text":"impl Default for Tilde","synthetic":false,"types":[]},{"text":"impl Default for Brace","synthetic":false,"types":[]},{"text":"impl Default for Bracket","synthetic":false,"types":[]},{"text":"impl Default for Paren","synthetic":false,"types":[]},{"text":"impl Default for Group","synthetic":false,"types":[]},{"text":"impl Default for Generics","synthetic":false,"types":[]},{"text":"impl Default for BoundLifetimes","synthetic":false,"types":[]},{"text":"impl Default for PathArguments","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; Default for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]}];
implementors["tiff"] = [{"text":"impl Default for Limits","synthetic":false,"types":[]}];
implementors["ttf_parser"] = [{"text":"impl&lt;'a&gt; Default for VariationAxes&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Default for Subtable&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Default for Subtables&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; Default for Names&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Default for Weight","synthetic":false,"types":[]},{"text":"impl Default for Width","synthetic":false,"types":[]},{"text":"impl Default for GlyphId","synthetic":false,"types":[]}];
implementors["winit"] = [{"text":"impl Default for ModifiersState","synthetic":false,"types":[]},{"text":"impl Default for ActivationPolicy","synthetic":false,"types":[]},{"text":"impl Default for MouseCursor","synthetic":false,"types":[]},{"text":"impl Default for WindowAttributes","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()