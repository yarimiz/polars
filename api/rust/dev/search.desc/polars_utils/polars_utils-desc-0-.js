searchState.loadedDescShard("polars_utils", 0, "Copy pasted from std::cell::SyncUnsafeCell can be removed …\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet mutable references to several items of the Arena\nSafety\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA utility to create a sharable counter This does not …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSafety\nFind the index of the first element of <code>arr</code> that is greater …\nFind the index of the first element of <code>arr</code> that is greater …\nA cached function that use <code>FastFixedCache</code> for access speed.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>UnsafeCell</code>, but <code>Sync</code>.\nCreates an <code>SyncUnsafeCell</code>, with the <code>Default</code> value for T.\nCreates a new <code>SyncUnsafeCell&lt;T&gt;</code> containing the given value.\nReturns the argument unchanged.\nGets a mutable pointer to the wrapped value.\nReturns a mutable reference to the underlying data.\nCalls <code>U::from(self)</code>.\nUnwraps the value.\nConstructs a new instance of <code>SyncUnsafeCell</code> which will …\nGets a mutable pointer to the wrapped value.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA ring-buffer with a size determined at creation-time\nGet a reference to all elements in the form of two slices.\nAdd at most <code>num</code> items of <code>value</code> into the <code>FixedRingBuffer</code>\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nPop an item at the front of the <code>FixedRingBuffer</code>\nPush an item into the <code>FixedRingBuffer</code>\nSafety\nA continuous memory region that may be allocated …\nReturns the argument unchanged.\nTakes ownership of an allocated memory region.\nReturns a <code>Some</code> mutable reference of <code>Vec&lt;T&gt;</code> iff this was …\nCalls <code>U::from(self)</code>.\nContains a byte slice and a precomputed hash for that …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA type logically equivalent to <code>Vec&lt;T&gt;</code>, but which does not …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSafety\nReturns the argument unchanged.\nReturns the argument unchanged.\nSafety\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUtility extension trait of iterator methods.\nEquivalent to <code>.collect::&lt;Vec&lt;_&gt;&gt;()</code>.\nEquivalent to <code>.collect::&lt;Result&lt;_, _&gt;&gt;()</code>.\nEquivalent to <code>.collect::&lt;Result&lt;Vec&lt;_&gt;, _&gt;&gt;()</code>.\nAn iterator that yields the current count and the element …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nOverflow Behavior\n<code>madvise()</code> with <code>MADV_POPULATE_READ</code> on linux systems. This a …\n<code>madvise()</code> with <code>MADV_SEQUENTIAL</code> on unix systems. This is a …\n<code>madvise()</code> with <code>MADV_WILLNEED</code> on unix systems. This is a …\nAttempt to prefetch the memory in the slice to the L2 …\nSafety\nA cursor over a <code>MemSlice</code>.\nA read-only reference to a slice of memory that can …\nA handle to an immutable memory mapped buffer.\nAdvise OS how this memory map will be accessed. Only …\nAdvise OS how this range of memory map will be accessed.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a <code>MemSlice</code> from <code>bytes::Bytes</code>. This is zero-copy.\nConstruct a <code>MemSlice</code> from <code>bytes::Bytes</code>. This is zero-copy.\nslice outlives the returned <code>MemSlice</code>.\nConstruct a <code>MemSlice</code> that simply wraps around a <code>&amp;[u8]</code>.\nConstruct a <code>MemSlice</code> from an existing <code>Vec&lt;u8&gt;</code>. This is …\nConstruct a <code>MemSlice</code> from an existing <code>Vec&lt;u8&gt;</code>. This is …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLock the whole memory map into RAM. Only supported on Unix.\nTransition the memory map to be writable.\nCreates a read-only memory map backed by a file.\nAttempt to prefetch the memory belonging to to this …\nAdjust the size of the memory mapping.\nPanics\nCopy the contents into a new owned <code>Vec</code>\nUnlock the whole memory map. Only supported on Unix.\nNaN will be larger than every valid value\nNaN will be smaller than every valid value\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nString type that inlines small strings.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nA pair which is ordered exclusively by the first element.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSafety\nSafety\nSafety\nThis is a perfect sort particularly useful for an arg_sort …\nUtility that allows use to send pointers to another thread.\nSafety\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSafety\nStartup system is expensive, so we do it once\nThis call is quite expensive, cache the results.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThis elides creating a <code>TotalOrdWrap</code> for types that don’t …\nAlternative trait for Eq. By consistently using this we …\nAlternative trait for Hash. By consistently using this we …\nAlternative trait for Ord. By consistently using this we …\nConverts an f32 into a canonical form, where -0 == 0 and …\nConverts an f64 into a canonical form, where -0 == 0 and …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nSafety\nFill current allocation if if &gt; 0 otherwise realloc\nPerform an in-place <code>Iterator::filter_map</code> over two vectors …\nWill push an item and not check if there is enough capacity")